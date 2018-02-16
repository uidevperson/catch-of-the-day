import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {

	constructor(){
		super();
		this.renderInventory = this.renderInventory.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e, key){
		const fish = this.props.fishes[key];
		// take copy of the fish and update with new data
		const updatedFish = {...fish, 
			[e.target.name]: e.target.value
		};
		console.log(updatedFish);
		this.props.updateFish(key, updatedFish);
	}

	renderInventory(key){
		const fish = this.props.fishes[key];

		return (
			 <div className="fish-edit" key={key}>
			 	<input name="name" value={fish.name} type="text" placeholder="Fish Name" onChange={(e) => this.handleChange(e, key)} />
			 	<input name="price" value={fish.price} type="text" placeholder="Fish Price" onChange={(e) => this.handleChange(e, key)} />
			 	<select name="status" value={fish.status} id="" onChange={(e) => this.handleChange(e, key)} >
			 		<option value="available">Fresh!</option>
			 		<option value="unavailable">Sold Out</option>
			 	</select>
			 	<textarea name="desc" value={fish.desc} placeholder="Fish Desc" onChange={(e) => this.handleChange(e, key)} ></textarea>
			 	<input name="image" value={fish.image} type="text" placeholder="Fish Image" onChange={(e) => this.handleChange(e, key)} />
			 </div>
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