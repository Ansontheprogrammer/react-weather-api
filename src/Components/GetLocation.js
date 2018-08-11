import React, { Component } from 'react';
import Board from './board';
import GetWeather from './GetWeather'
class GetLocation extends Component {
	constructor(){
		super();
		this.state = {
			options : {
			  enableHighAccuracy: true,
			  timeout: 5000,
			  maximumAge: 0
				},
		}
	}

	render() {
		function success(pos) {
		  var crd = pos.coords;
		  this.setState({
		  	url: "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=" + crd.latitude + "&lon=" + crd.longitude
		  });
		}

		function error(err) {
		  console.warn(`ERROR(${err.code}): ${err.message}`);
		}

		navigator.geolocation.getCurrentPosition(success.bind(this), error, this.state.options);

		return(
			<GetWeather url= {this.state.url} chosen={this.props.chosen} />
			);
	};
}


export default GetLocation;