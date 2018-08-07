import $ from 'jquery';

class WebPage extends Component{
	componentDidMount() {
	    fetch("api.openweathermap.org/data/2.5/weather?lat=" + this.state.latitude + "&lon=" + this.state.longitude)
	      .then(res => res.json())
	      .then(
	        (result) => {
	        	console.log(result);
	          this.setState({
	            isLoaded: true,
	            items: result.items
	          });
	          console.log(this.state.items);
	        },
	        // Note: it's important to handle errors here
	        // instead of a catch() block so that we don't swallow
	        // exceptions from actual bugs in components.
	        (error) => {
	          this.setState({
	            isLoaded: true,
	            error
	          	});
	        		}
	    		)
	}
	render(){
		return ()
	}
