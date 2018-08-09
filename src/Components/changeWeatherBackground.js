import $ from 'jquery';
import React, { Component } from 'react';

class WeatherBackground extends Component{
	constructor(props){
		super(props);
		this.state = {
			myWeather: null,
			lastWeather: null,
			cloudy: null,
			rainy: null, 
			sunny: null,
		}
	}
	render(){
		return(<h2>From WeatherBackground</h2>)
	}
	
}

export default WeatherBackground;