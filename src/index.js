// let's go!
import React from 'react';
import { render } from 'react-dom';
import StorePicker from './components/StorePicker';

// class StorePicker extends React.Component {
// 	render(){
// 		return (
// 			<div>StorePicker</div>
// 		);
// 	}
// }

render(<StorePicker />, document.querySelector('#main'));
// export default StorePicker;
