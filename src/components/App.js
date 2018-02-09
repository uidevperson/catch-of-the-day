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

	render(){
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood market" />
					<ul className="list-of-fishes">
						<Fish />
					</ul>
				</div>
				<Order />
				<Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
			</div>
		);
	}
}

export default App;