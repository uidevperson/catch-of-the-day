import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
	// constructor(){
	// 	super();
	// 	this.renderInventory = this.renderInventory.bind(this);
	// }

	renderInventory(key){
		return (
			 <p key={key}>{key}</p>
		)
	} 

	render(){
		return (
			<div>
				<h2>Inventory</h2>
				{Object.keys(this.props.fishes).map(this.renderInventory)}
				<AddFishForm addFish={this.props.addFish} />
				<button onClick={this.props.loadSamples}>Load Sample Fishes</button>
			</div>
		)
	}
}

export default Inventory; 