import React, { Component } from 'react';
import $ from 'jquery';
import GetLocation from './GetLocation';

class WebPage extends Component{
	constructor(){
		super()
		this.state = {
			latitude: 0,
			longitude:0,
			choose:false,
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

	handleChooseLocation(e){
		e.preventDefault();
		this.state.removeButtons();
		this.state.inputs();
		this.setState({
			chosen:true
		});
	}
	handleGetLocation(e){
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
			        <p className="App-intro">
			          <div class="container">
			          		<div class="row">
			          			<div id='Location'>
			          				<button onClick={this.handleChooseLocation.bind(this)}>Choose Location</button>
			          				<button onClick={this.handleGetLocation.bind(this)}>Get Location </button>

			          			</div>
			          		</div>
			          </div>
			        </p>
			        <GetLocation chosen={this.state.chosen} />
			    </div>
		    </div>
			)
	}
	
}

export default WebPage;
