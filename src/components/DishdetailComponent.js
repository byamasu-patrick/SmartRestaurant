import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentsForm from './CommentsFormComponent';


function RenderDish({ dish }){        
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
function RenderComments({ comments }){
    if(comments != null){
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
                    <CommentsForm />
                </ul>            
            </div>
        );
    }
    else{
        return (<div></div>);
    }
}

const Dishdetail = (props) => {
    const dish = props.dish;

    return (
        <div className = "container">
            <div className = "row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to = "/menu">Menu </Link></BreadcrumbItem>
                    <BreadcrumbItem active>{ props.dish.name }</BreadcrumbItem>
                </Breadcrumb>
                <div className = "col-12">
                    <h3>{ props.dish.name }</h3>
                    <hr/>
                </div>
            </div>
            <div className = "row">
                <div className = "col-12 col-md-5 mb-3">
                    { <RenderDish dish = { dish } /> }
                </div>
                { <RenderComments comments = { props.comments } /> }
        
            </div>
        </div>
        
    );
}

export default Dishdetail;