import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return (
      <div className = "App">
        <Navbar dark color = "primary">
          <div className = "container">
            <NavbarBrand href = "/">Restaurant Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
