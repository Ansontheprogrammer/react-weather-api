import React, { Component } from 'react';
import WeatherData from './WeatherData';

class Board extends Component {
	constructor(props){
		super(props);
		this.state = {
			latitude : 0,
			longitude: 0,
			result: false,
			
			update:false,
		}
	}
	chosen(props){
		if (this.props.chosen){
			console.log('in chosen');
			return <WeatherData temperature= {this.props.temperature} city = {this.props.city} weather = {this.props.weather} description = {this.props.description} />
		}
	}
	render() {
		return(
			<div>
				{this.chosen()}
			</div>
			)
	};
}


export default Board;