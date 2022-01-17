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
                    <div className = "container" key = { comment.id }>
                        <li>
                        <p>{ comment.comment }</p>
                        <p> -- { comment.author }, { new Intl.DateTimeFormat('en-US', 
                            { year:'numeric', month: 'short', day: '2-digit' })
                            .format(new Date(Date.parse(comment.date))) }</p>
                        </li>
                    </div>
                );
            });
            return (
                <div className = "col-12 col-md-5 m-1">
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