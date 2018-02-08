import React from 'react';

class AddFishForm extends React.Component {
	render(){
		return (
			<form  className="fish-edit">
				<input type="text" placeholder="fish Name"/>
				<input type="text" placeholder="fish Price"/>
				<select name="" id="">
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out</option>
				</select>
				<input type="text" placeholder="fish Desc"/>
				<input type="text" placeholder="fish Image"/>
				<button type="submit">+ Add Item</button>
			</form>
		)
	}
}

export default AddFishForm;