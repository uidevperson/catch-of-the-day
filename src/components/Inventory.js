import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
	// bind function to component
	constructor(){
		super();
		this.renderInventory = this.renderInventory.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.renderLogin =  this.renderLogin.bind(this);
		this.authenticate = this.authenticate.bind(this);
		this.state = {
			uid: null,
			owner: null
		}
	}

	handleChange(e, key){
		const fish = this.props.fishes[key];
		// take copy of the fish and update with new data
		const updatedFish = {...fish, 
			[e.target.name]: e.target.value
		};
		this.props.updateFish(key, updatedFish);
	}

	authenticate(){

	}

	renderLogin(){
		return (
			<nav className="login">
				<h2>Inventory</h2>
				<p>Sign in to manage your storesInventory</p>
				<button className="twitter" onClick={() => this.authenticate('twitter')}>Login with Twitter</button>
		{/*		<button className="github" onClick={() => this.authenticate('github')}>Login with</button>
				<button className="github" onClick={() => this.authenticate('github')}>Login with</button>*/}
			</nav>
		)
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
			 	<button onClick={() => this.props.removeFish(key)} >Remove Fish</button>
			 </div>
		)
	} 

	render(){
		//check if user is not logged in
		if(!this.state.uid){
			return <div>{this.renderLogin()}</div>
		}

		if(this.state.uid !== this.state.owner){
			return (
				<div>
					<p>Sorry you are not the owner of the store</p>
				</div>
			)
		}

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

Inventory.propTypes = {
	fishes: React.PropTypes.object.isRequired,
	updateFish: React.PropTypes.func.isRequired,
	addFish: React.PropTypes.func.isRequired,
	removeFish: React.PropTypes.func.isRequired,
	loadSamples: React.PropTypes.func.isRequired,
};

export default Inventory; 