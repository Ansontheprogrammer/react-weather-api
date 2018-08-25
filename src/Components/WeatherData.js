import React, { Component } from 'react';
import sunny from '../img/sunny.jpg';
import spring from '../img/spring.jpg';
import cold from '../img/cold.jpg';
import $ from 'jquery';

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
		$('body').css('background-image', `url(${sunny})`)
	}
	cool (temp){
		$('body').css('background-image', `url(${spring})`)
	}
	cold (temp){
		$('body').css('background-image', `url(${cold})`)
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
		return(
			<div>
				<div class="container">
					<div class="row">
						  <div class ='col-lg-4'>
							  <h1> Your city: {this.props.city}</h1> <br/>
							  <h1> How it feels today: <br />{this.state.backgroundWeather}!</h1>
						  </div>
						  <div class ='col-lg-8'>
						  		<ul class="list-group">
								    <div id="temp" class="container-fluid">
										<h3>Temperature: {this.props.temperature}</h3>
									</div>
									<br />
									<div id="weather" class="container-fluid">
										<h3>Weather: {this.props.weather}</h3>
									</div>
									<br />
									<div id="description" class="container-fluid">
										<h3>Description: {this.props.description}</h3>
									</div>
								</ul>
						  </div>
				    </div>	
				</div>
				
			</div>
			)
	};
}


export default WeatherData;