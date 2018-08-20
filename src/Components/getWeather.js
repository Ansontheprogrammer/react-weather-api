import React, { Component } from 'react';
import Board from './board';
import PropTypes from 'prop-types';

class GetWeather extends Component{

	constructor(props){
		super(props);
		this.state = {
			appId: "&APPID=1413241143ce0ea1afa44c8522533b96",
		};
	}
	componentWillMount(){
		const options = {
			  enableHighAccuracy: true,
			  timeout: 5000,
			  maximumAge: 0
				};
			function success(pos) {
			  var crd = pos.coords;
			  this.setState({
			  	url: "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=" + crd.latitude + "&lon=" + crd.longitude
			  });
			}

			function error(err) {
			  console.warn(`ERROR(${err.code}): ${err.message}`);
			}

			navigator.geolocation.getCurrentPosition(success.bind(this), error, options);
	}
	componentDidMount(){
		this.fetchData();	
	}
	fetchData(){
		const url = this.state.url + this.state.appId;
		fetch(url)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	          	temperature: result.main.temp,
	          	city: result.name,
	          	weather: result.weather[0].main,
	          	description: result.weather[0].description
	          })
	        },
	        // Note: it's important to handle errors here
	        // instead of a catch() block so that we don't swallow
	        // exceptions from actual bugs in components.
	        (error) => {
	      		console.log(error);
	      		return this.fetchData();
	            this.setState({
		            isLoaded: true,
		            error
		    });
	        }
	      )
	}
	render(){

		return (
			<div>
				<Board chosen = {this.props.chosen} weather={this.state.weather} description={this.state.description} temperature = {this.state.temperature} city = {this.state.city} />
			</div>
			)
	}
}
GetWeather.propTypes = {
	chosen: PropTypes.bool
}
export default GetWeather;
