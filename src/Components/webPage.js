import React, { Component } from 'react';

class WebPage extends Component{
	constructor(){
		super()
		this.state = {
			latitude: 0,
			longitude:0,
			removeButtons : function(){
				let div = document.getElementById('Location');
				div.parentNode.removeChild(div);
	}
		}
	}
	
	handleChooseLocation(e){
		e.preventDefault();
		let latInput = <input refs='lat' placeholder="latitude"/>;
		let lngInput = <input refs='lng' placeholder="longitude"/>;
		this.state.removeButtons();
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
		          				<button onClick={this.handleChooseLocation}>Choose Location</button>
		          				<button onClick={this.handleGetLocation}>Get Location</button>
		          			</div>
		          		</div>
		          </div>
		        </p>
		    </div>
			)
	}
	
}

export default WebPage;
