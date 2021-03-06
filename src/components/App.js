import React from 'react';
import base from '../base';	
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
// main App component
class App extends React.Component {
	constructor() {
		super();
		this.addFish = this.addFish.bind(this);
		this.loadSamples = this.loadSamples.bind(this);
		this.addToOrder = this.addToOrder.bind(this);
		this.removeFromOrder = this.removeFromOrder.bind(this);
		this.addFish = this.addFish.bind(this);
		this.updateFish = this.updateFish.bind(this);
		this.removeFish = this.removeFish.bind(this);
		// get initial state
		this.state = {
			fishes: {},
			order: {}
		}
	}

	componentWillMount(){
		// runs before app is rendered
		// connnect to firebase DB 
		this.ref = base.syncState(`${this.props.params.storeId}/fishes`
		,{
			context: this,
			state: 'fishes'
		});
		// check if there is any order in local storage
		const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);
		// check if something in local storage
		if(localStorageRef){
			// update our App component order state
			this.setState({
				order: JSON.parse(localStorageRef)
			});	
		}
	}

	componentWillUnmount(){
		base.removeBinding(this.ref);
	}

	componentWillUpdate(nextProps, nextState){
		localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
	}

	addFish(fish){
		// update state
		const fishes = {...this.state.fishes};
		// add new fish
		const timeStamp = Date.now();
		fishes[`fishes-${timeStamp}`] = fish;
		// set state
		this.setState({fishes});
	}

	updateFish(key, updatedFish){
		// update state | make copy of fishes state
		const fishes = {...this.state.fishes};
		// update copy of stae with update data
		fishes[key] = updatedFish;
		// add update fishes state with new fish data
		this.setState({fishes});
	}

	removeFish(key){
		// remove state
		const fishes = {...this.state.fishes};
		// remove fish
		fishes[key] = null;
		// set state
		this.setState({fishes});
	}

	loadSamples(){
		this.setState({
			fishes: sampleFishes
		});
	}

	addToOrder(key){
		// make copy of our state
		const order = {...this.state.order};
		//update or add new no. of fish ordered
		order[key] = order[key] + 1 || 1;
		this.setState({order}); //set state
	}

	removeFromOrder(key){
		// make copy of our state
		const order = {...this.state.order};
		//update or remove new no. of fish ordered
		delete order[key];
		this.setState({order}); //set state
	}

	render(){
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood market" />
					<ul className="list-of-fishes">
						{
							Object
							.keys(this.state.fishes)
							.map(key => <Fish 
								key={key} 
								index={key} 
								addToOrder={this.addToOrder} 
								details={this.state.fishes[key] }
							/>)
						}
					</ul>
				</div>
				<Order 
				fishes={this.state.fishes}
				params={this.props.params}  
				order={this.state.order}
				removeFromOrder={this.removeFromOrder} 
				/>
				<Inventory 
				addFish={this.addFish}
				fishes={this.state.fishes}
				updateFish={this.updateFish}
				removeFish={this.removeFish}  
				loadSamples={this.loadSamples} 
				addToOrder={this.addToOrder}
				storeId={this.props.params.storeId}
				/>
			</div>
		);
	}
}

App.propTypes = {
	params: React.PropTypes.object.isRequired
};

export default App;
