import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem,
    Button, Label, Modal,ModalHeader, ModalBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form'; 
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)

class CommentsForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }
    handleSubmit(values){
        this.toggleModal();
        //console.log("Dish id: "+ this.props.dishId);
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render(){
        return(
            <div className='container'>
                <Button outline onClick={this.toggleModal}>
                    <span className='fa fa-pencil'></span>Submit Comment
                </Button>
                <Modal isOpen = { this.state.isModalOpen } toggle={ this.toggleModal }> 
                    <ModalHeader>Submit Comment</ModalHeader>  
                    <ModalBody>
                        <LocalForm onSubmit={ (values) => this.handleSubmit(values) }>
                            <Row className='form-group'>
                                <Label htmlFor='rating' md={12}>Rating</Label>
                                <Col md = { 12 }>
                                    <Control.select model=".rating" id="rating" name="rating"
                                    className='form-control'>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='author' md={12}>Your Name</Label>
                                <Col md = { 12 }>
                                    <Control.text model=".author" id="author" name="author"
                                    className='form-control'
                                    placeholder='Your Name'
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}/>
                                    <Errors
                                        className='text-danger'
                                        model='.author'
                                        show='touched'
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='comment' md={12}>Comment</Label>
                                <Col md = { 12 }>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                    className='form-control' rows="6"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={ { size: 12 } }>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

function RenderDish({ dish }){        
    if(dish != null){
        return (
            <FadeTransform in 
                trasnformProps = {{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg src = { baseUrl + dish.image } width = "100%" alt = { dish.name }/>
                    <CardBody>
                        <CardTitle>{ dish.name }</CardTitle>  
                        <CardText>{ dish.description }</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
    }  
    else{
        return (<div></div>);
    }
}
function RenderComments({ comments, postComment, dishId }){
    if(comments != null){ 
        return (
            <div className = "col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    <Stagger in>
                        { 
                            comments.map((comment) => {
                                return (
                                    <Fade in>
                                        <div className = "container" key = { comment.id }>
                                            <li>
                                            <p>{ comment.comment }</p>
                                            <p> -- { comment.author }, { new Intl.DateTimeFormat('en-US', 
                                                { year:'numeric', month: 'short', day: '2-digit' })
                                                .format(new Date(Date.parse(comment.date))) }</p>
                                            </li>
                                        </div>
                                    </Fade>
                                );
                            })
                        }
                    </Stagger>
                    <CommentsForm  dishId = { dishId }
                        postComment = { postComment } />
                </ul>            
            </div>
        );
    }
    else{
        return (<div></div>);
    }
}

const Dishdetail = (props) => {
    if (props.isLoading) {
        return (
            <div className='container'>
                <div className='row'>
                    <Loading />
                </div>
            </div>
        );
    } 
    else if (props.errMess) {
        return (
            <div className='container'>
                <div className='row'>
                    <h4>{ props.errMess }</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) {
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
                        { <RenderDish dish = { props.dish } /> }
                    </div>
                    { <RenderComments comments = { props.comments } 
                        postComment = { props.postComment }
                        dishId = { props.dish.id }/> }
            
                </div>
            </div>
            
        );
    }
}

export default Dishdetail;