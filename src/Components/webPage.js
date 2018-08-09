import React, { Component } from 'react';
import $ from 'jquery';

class WebPage extends Component{
	constructor(){
		super()
		this.state = {
			latitude: 0,
			longitude:0,
			result: false,
			appId: "&APPID=1413241143ce0ea1afa44c8522533b96",
			update:false,
			removeButtons : function(){
				let div = document.getElementById('Location');
				div.parentNode.removeChild(div);},
			inputs : ()=>{
					let latInput = <input refs='lat' placeholder="latitude"/>;
					let lngInput = <input refs='lng' placeholder="longitude"/>;
					let a = $('#Location');
					a.append(latInput, lngInput);},
		}
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
	handleChooseLocation(e){
		e.preventDefault();
		this.state.removeButtons();
		this.state.inputs();
	}
	handleGetLocation(e){
		e.preventDefault();
		this.state.removeButtons();
	}

	render() {
		return(
			<div>
				<header className="App-header">
		          <div class="container-fluid">
		          <h1 className="App-title">Welcome my Weather Api {}</h1>
		          </div>
		        </header>
		        <p className="App-intro">
		          <div class="container">
		          		<div class="row">
		          			<div id='Location'>
		          				<button onClick={this.handleChooseLocation.bind(this)}>Choose Location</button>
		          				<button onClick={this.handleGetLocation.bind(this)}>Get Location </button>
		          				<h3>Your city: {this.state.city}</h3>
		          				
		          				<h3>The temperature today {this.state.temperature}</h3>
		          			</div>
		          		</div>
		          </div>
		        </p>
		    </div>
			)
	}
	
}

export default WebPage;
