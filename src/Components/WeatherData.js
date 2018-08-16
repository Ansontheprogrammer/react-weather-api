import React, { Component } from 'react';
import WeatherBackground from './changeWeatherBackground';

class WeatherData extends Component {
	constructor(props){
		super(props);
		this.state = {
			backgroundWeather: null
		}
	}
	componentWillMount(){// Immediately before initial rendering
		this.getBackground();
	}
	componentDidMount(){// Immediately before initial rendering
		this.changeBackground();
	}
	hot (temp){
		temp.style.backgroundColor = 'red';
	}
	cool (temp){
		temp.style.backgroundColor = 'green';
	}
	cold (temp){
		temp.style.backgroundColor = 'blue'
	}

	changeBackground(){
		const temperature = document.getElementById('temp');
		switch (this.state.backgroundWeather){
			case 'Hot':
				this.hot(temperature);
				break;
			case 'Cool':
				this.cool(temperature);
				break;
			case 'Cold':
				this.cold(temperature);
				break;
		}
	}

	setBackground(weather){
			this.setState({
				backgroundWeather: weather
			});
		}
	getBackground(){
		this.props.temperature >= 70 ? this.setBackground('Hot') : 
				this.props.temperature >= 50 ? this.setBackground('Cool') : 
														this.setBackground('Cold');
	}

	
	render() {	
		// this.changeBackground();
		return(
			<div>
				<div class="container-fluid">
					<h1> Hey there in {this.props.city} and its {this.state.backgroundWeather} today!</h1>
				</div>
				<div class="container jumbotron">
					<h3>Here is your temperature:</h3>
					<div id="temp" class="container">
						<p>Temperature: {this.props.temperature}</p>
					</div>
					<div id="weather" class="container-fluid">
						<p>Weather: {this.props.weather}</p>
					</div>
					<div id="description" class="container-fluid">
						<p>Description: {this.props.description}</p>
					</div>
				</div>
				
			</div>
			)
	};
}


export default WeatherData;