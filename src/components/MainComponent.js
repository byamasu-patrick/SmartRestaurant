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
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders, postFeedback } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
// 
const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => dispatch(postFeedback(firstname, lastname, telnum, email, agree, contactType, message)), 
    fetchDishes: () => { dispatch(fetchDishes()) },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
    fetchComments: () => { dispatch(fetchComments()) },
    fetchPromos: () => { dispatch(fetchPromos()) },
    fetchLeaders: () => { dispatch(fetchLeaders()) }
});

class Main extends Component {
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }
    render(){
        const HomePage = () => {
            return (
                <Home dish = { this.props.dishes.dishes.filter((dish) => dish.featured)[0] }
                    dishesLoading = { this.props.dishes.isLoading }
                    dishesErrMess = { this.props.dishes.errMess }
                    promotion = { this.props.promotions.promotions.filter((promotion) => promotion.featured)[0] }
                    promosLoading = { this.props.promotions.isLoading }
                    promosErrMess = { this.props.promotions.errMess }
                    leader = { this.props.leaders.leaders.filter((leader) => leader.featured)[0] }
                    leadersLoading = { this.props.leaders.isLoading }
                    leadersErrMess = { this.props.leaders.errMess }/>
            );
        };
         
        const DishWithId = ({match}) => {
            return (
                <Dishdetail 
                    dish = { this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0] } 
                    isLoading = { this.props.dishes.isLoading }
                    errMess = { this.props.dishes.errMess }
                    comments = { this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10)) }
                    commentsErrMess = { this.props.comments.errMess }
                    postComment = { this.props.postComment }/>
            );
        };

        return (
        <div>
            <Header/>
            <TransitionGroup>
                <CSSTransition key={this.props.location.key} classNames="page" timeout={1000}>
                    <Switch>
                        <Route path = "/home" component = { HomePage } />
                        <Route exact path = "/menu" component = { () => <Menu dishes = {this.props.dishes} /> } />
                        <Route exact path = "/aboutus" component = { () => <About leaders = {this.props.leaders} /> } />
                        <Route path = "/menu/:dishId" component = { DishWithId } />
                        <Route exact path = "/contactus" component = { () => <Contact resetFeedbackForm = { this.props.resetFeedbackForm }
                        postFeedback = { this.props.postFeedback } /> } />
                        <Redirect to = "/home" />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            <Footer/>
        </div>
        );
    }
}
// connect the main component to the redux store to obtain the state of the application
// from redux store
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
