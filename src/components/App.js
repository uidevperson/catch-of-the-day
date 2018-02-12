import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
	constructor() {
		super();
		//
		this.addFish = this.addFish.bind(this);
		this.loadSamples = this.loadSamples.bind(this);
		this.addToOrder = this.addToOrder.bind(this);
		// get initial state
		this.state = {
			fishes: {},
			order: {}
		}
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
		//set state
		this.setState({order});
		// debugger;
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
				<Order />
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples} addToOrder={this.addToOrder} />
			</div>
		);
	}
}

export default App;