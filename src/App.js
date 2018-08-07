import React, { Component } from 'react';
import './App.css';
import WebPage from './Components/webPage';
import GetLocation from './Components/GetLocation';

class myWeather extends Component{
	constructor(props){
		super(props);
		this.state = {
			myWeather: null,
			lastWeather: null,
			cloudy: null,
			rainy: null, 
			sunny: null,
			latitude: 0,
			longitude: 0,
			setLocation: false,
			getLocation: ()=>{
				if (this.refs.get.value.toLowerCase === "yes"){
					this.state.setLocation = true;
					console.log("ok setLocation is " + this.state.setLocation);
				} else{
					this.refs.get.value.toLowerCase === "no" ? console.log("ok") : alert("Answer Invalid");
				}
			},	
		};
	};

	render() {
	    return (
	      <div className="App">
	        <WebPage />

	      </div>
	    );
  	}
}

/*	Steps:
		Ask user do they want to use their location or different latitude or longitude
		Delete the buttons
		Get user location if they want to use their location
		Use the given location and send it to getWeather Component
		Use an api call to weather api with lat & long & get data
		Place needed data in the state and send the data up the chain to changeWeatherBackground & presentData
		Generate the necessary css with changeWeatherBackground
		Send css data to webPage
		Use the presentData Component to organize html with the properties received from api call
		Send the present Data Html to Webpage.js
		Polish up WebPage
*/

export default myWeather;
