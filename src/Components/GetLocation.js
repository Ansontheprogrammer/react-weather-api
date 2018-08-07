import React, { Component } from 'react';

class GetLocation extends Component {
	constructor(props){
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
		return(
			<div></div>
			);
	};
}
// function success(pos) {
//   var crd = pos.coords;
//   this.state.latitude = crd.latitude;
//   this.state.longitude = crd.longitude
//   console.log('Your current position is:');
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// }

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, this.state.options);
// return getLocation()
// }

export default GetLocation;