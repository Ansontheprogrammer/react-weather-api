import React, { Component } from 'react';
import GetWeather from './GetWeather';
import WebPage from './webPage'
class Board extends Component {
	constructor(props){
		super(props);
		this.state = {
			latitude : 0,
			longitude: 0,
			result: false,
			appId: "&APPID=1413241143ce0ea1afa44c8522533b96",
			update:false,
		}
	}
	changeState(lat,lng){
		// return this.setState({
		// 	latitude : this.props.latitude,
		// 	longitude: this.props.longitude,
		// });
	}
	componentDidMount(){
		this.fetchData();	
	}
	fetchData(){
		let url = this.props.url + this.state.appId;
		fetch("https://api.openweathermap.org/data/2.5/weather?lat=40.7086391&lon=-74.2531987&units=imperial" + this.state.appId)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	          	temperature: result.main.temp,
	          	city: result.name,
	          	weather: result.weather.main
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
	render() {
		return(
			<div>
				<WebPage temperature = {this.state.temperature} city = {this.state.city} weather = {this.state.weather} />
			</div>
			)
	};
}


export default Board;