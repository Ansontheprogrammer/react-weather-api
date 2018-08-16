import React, { Component } from 'react';
import $ from 'jquery';
import GetWeather from './getWeather';
import GetInputs from './GetInputs';
import PropTypes from 'prop-types';

class WebPage extends Component{
	constructor(){
		super()
		this.state = {
			chosen:false,
			removeButtons : function(){
				let div = document.getElementById('Location');
				div.parentNode.removeChild(div);
				return 
			},
		}
	}
	_handleGetLocation(e){
		e.preventDefault();
		this.state.removeButtons();
		this.setState({
			chosen:true
		});
	}
	
	render() {
		return(
			<div>
				<div>
					<header className="App-header">
			          <div class="container-fluid">
			          <h1 className="App-title">Welcome my Weather Api {}</h1>
			          </div>
			        </header>
			        <GetWeather chosen={this.state.chosen}/>
			        <p className="App-intro">
			          <div class="container">
			          		<div class="row">
			          			<div id='Location'>
			          				<button onClick={this._handleGetLocation.bind(this)}>Get Location </button>
			          			</div>
			          		</div>
			          </div>
			        </p>
			    </div>
		    </div>
			)
	}
	
}

export default WebPage;
