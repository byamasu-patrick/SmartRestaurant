import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render(){
    return (
      <div>
        <Navbar dark color = "primary">
          <div className = "container">
            <NavbarBrand href = "/">Restaurant Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu  dishes = { this.state.dishes }/>
      </div>
    );
  }
}



export default App;
