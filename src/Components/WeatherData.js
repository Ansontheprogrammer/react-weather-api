import React, { Component } from 'react';

class WeatherData extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	render() {
		console.log('hey')
		return(
			<div>
				<div class="container-fluid">
						<h1> Hey there in {this.props.city}!</h1>
							</div>
				<div class="container">
					<h3>Here is your temperature:</h3>
					<ul>
						<li>Temperature: {this.props.temperature}</li>
						<li>Weather: {this.props.weather}</li>
						<li>Description: {this.props.description}</li>
					</ul>
				</div>
			</div>
			)
	};
}


export default WeatherData;