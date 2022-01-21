import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// this function map the state of redux store to appear in the main component as props rather than state
// the function take the state object map it to become props in the component
const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    };
}

class Main extends Component {
    constructor(props){
        super(props);
        
    }
    render(){
        const HomePage = () => {
            return (
                <Home dish = { this.props.dishes.filter((dish) => dish.featured)[0] }
                promotion = { this.props.promotions.filter((promotion) => promotion.featured)[0] }
                leader = { this.props.leaders.filter((leader) => leader.featured)[0] }/>
            );
        };
         
        const DishWithId = ({match}) => {
            return (
                <Dishdetail dish = { this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0] } 
                comments = { this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10)) }/>
            );
        };

        return (
        <div>
            <Header/>
            <Switch>
                <Route path = "/home" component = { HomePage } />
                <Route exact path = "/menu" component = { () => <Menu dishes = {this.props.dishes} /> } />
                <Route exact path = "/aboutus" component = { () => <About leaders = {this.props.leaders} /> } />
                <Route path = "/menu/:dishId" component = { DishWithId } />
                <Route exact path = "/contactus" component = { Contact } />
                <Redirect to = "/home" />
            </Switch>
            <Footer/>
        </div>
        );
    }
}
// connect the main component to the redux store to obtain the state of the application
// from redux store
export default withRouter(connect(mapStateToProps)(Main));
