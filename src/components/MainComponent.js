import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES
        }
    }
    
    render(){
        const HomePage = () => {
            return (
                <Home />
            );
        };
        return (
        <div>
            <Header/>
            <Switch>
                <Route path = "/home" component = { HomePage } />
                <Route exact path ="/menu" component = { () => <Menu dishes = {this.state.dishes} /> } />
                <Route exact path ="/contactus" component = { Contact } />
                <Redirect to = "/home" />
            </Switch>
            <Footer/>
        </div>
        );
    }
}
export default Main;
