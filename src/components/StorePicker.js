// let's go!
import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	// constructor(){
	// 	super();
	// 	this.gotToStore = this.gotToStore.bind(this);
	// }
	gotToStore(e) {
		e.preventDefault()
		const storeId =this.storeInput.value;
		console.log('going to ', storeId);
		//first grab the text from the input
		//second transition from / to /store/:storeId	
		this.context.router.transitionTo(`/store/${storeId}`);
	}
  
	render(){
		return (
			<form className="store-selector" onSubmit={(e) => {this.gotToStore(e)}} >
		{ /*	 comment FFS */ }
				<h2>Please enter a store</h2>
				<input type="text" required placeholder="Store name" defaultValue={getFunName()} 
					ref={(input) => {
						this.storeInput = input;
					}}
				/>
				<button type="submit">Visit Store</button>
			</form>
		);
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;
