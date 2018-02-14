import Rebase from 're-base';
//connect to firebase DB
const base = Rebase.createClass({
	apiKey: "AIzaSyCbW5PGS20QX8UeEd-cn4LOqFzLCt7JZcE",
	authDomain: "catch-of-the-day-uidevthing.firebaseapp.com",
	databaseURL: "https://catch-of-the-day-uidevthing.firebaseio.com",
});

export default base;
