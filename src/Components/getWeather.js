import $ from 'jquery';
import React, { Component } from 'react';
import WeatherBackground from './changeWeatherBackground';

class GetWeather extends Component{
	constructor(props){
		super(props);
		this.state = {};
	}
	render(){	
			$.ajax({
				url: this.props.url,
				error: (xhr,status,err)=>{
					console.log(err);
				},
				type: "GET",
				statusCode: {
				    404: function() {
				      alert( "page not found" );
				    }
  				}
  			}).done(function(data){
  				console.log(data)
  			})
  				
		console.log(this.props.url);
		return (
			<div>
				<h1>From GetWeather {this.props.latitude}</h1>
				<WeatherBackground />
			</div>
			)
	}
}
export default GetWeather;
