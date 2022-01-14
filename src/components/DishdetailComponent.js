import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class Dishdetail extends Component{
    constructor(props){
        super(props);

    }
    renderDish(dish){
        if(dish != null){
            return (
                <Card>
                    <CardImg src = { dish.image } width = "100%" alt = { dish.name }/>
                    <CardBody>
                        <CardTitle>{ dish.name }</CardTitle>  
                        <CardText>{ dish.description }</CardText>
                    </CardBody>
                </Card>
            );
        }  
        else{
            return (<div></div>);
        }
    }
    renderComments(dish){
       if(dish != null){
           const comments = dish.comments;
            const commentsData = comments.map((comment) => {
                return (
                    <li key = { comment.id }>
                        <p>{ comment.comment }</p>
                        <p>-- { comment.author }, { comment.date }</p>
                    </li>
                );
            });
            return (
                <div className = "col-12 col-md-5">
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                        { commentsData }
                    </ul>            
                </div>
            );
        }
        else{
            return (<div></div>);
        }
    }
    render(){
        const dish = this.props.dish;

        return (
            <div className = "row">
                <div className = "col-12 col-md-5">
                    { this.renderDish(dish) }
                </div>
                { this.renderComments(dish) }
            </div>
        );
    }
}

export default Dishdetail;