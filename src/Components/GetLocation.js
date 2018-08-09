import React, { Component } from 'react';
import Board from './board';

class GetLocation extends Component {
	constructor(){
		super();
		this.state = {
			options : {
			  enableHighAccuracy: true,
			  timeout: 5000,
			  maximumAge: 0
				},
			latitude : 0,
			longitude: 0,
		}
	}

	render() {
		function success(pos) {
		  var crd = pos.coords;
		  this.setState({
		  	latitude: crd.latitude,
		  	longitude: crd.longitude,
		  	url: "https://api.openweathermap.org/data/2.5/weather?lat=" + crd.latitude + "&lon=" + crd.longitude
		  });
		}

		function error(err) {
		  console.warn(`ERROR(${err.code}): ${err.message}`);
		}

		navigator.geolocation.getCurrentPosition(success.bind(this), error, this.state.options);

		return(
			<div></div>
			);
	};
}


export default GetLocation;