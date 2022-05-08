import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menu';
import { PLACES } from './shared/places';
import Greet from './components/greet';
import * as api from './api.js';

class App extends React.Component {					
  
	constructor(props){
		super(props);
		
		this.state = {
			places: []
		};
	}

  componentDidMount(){
    const onSuccess = (response) => {
      const recipes = response.data.hits;
      const parseRecipes = recipes.map(r => {
        return {
          name:r.recipe.label,
          image:r.recipe.image
        }
      });
      this.setState({places:parseRecipes});

    };

    const onFailure = (error) => console.log(error);

    api.getCuisines(onSuccess, onFailure);
    
  }


	render(){
		return (
			<div className='App'>
				<Navbar color="primary">
					<div className="container" id="brand">
						<NavbarBrand>Food Porject</NavbarBrand>
					</div>
				</Navbar>
				<Greet />
				<h3>Different Sample Dishes</h3>
				<Menu places={this.state.places} />
			</div>
		);
	}
}

export default App;