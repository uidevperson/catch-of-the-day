// let's go!
import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	gotToStore() {
		console.log('test');
		//first grab the text from the input
		//second transition from / to /store/:storeId	
	}
	render(){
		return (
			<form className="store-selector" onSubmit={this.gotToStore()}>
		{ /*	 comment FFS */ }
				<h2>Please enter a store</h2>
				<input type="text" required placeholder="Store name" defaultValue={getFunName()}/>
				<button type="submit">Visit Store</button>
			</form>
		);
	}
}

export default StorePicker;
