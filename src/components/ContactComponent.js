import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, Row, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component{
    constructor(props){
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false,
                message: false
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur =  this.handleBlur.bind(this);
    }
    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event){
        console.log("Current State is: "+ JSON.stringify(this.state));
        alert("Current State is: "+ JSON.stringify(this.state));
        event.preventDefault();
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(firstname, lastname, telnum, email, message){
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            message: ''
        };
        if(this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if(this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if(this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if(this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';
        
        const reg = /^\d+$/;

        if(this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should containe only numbers';
        
        if(this.state.touched.email && email.split('').filter( x => x === '@' ).length != 1)
            errors.email = 'Email should containas @ sign';
        
        if(this.state.touched.message && message.length < 10)
            errors.message = 'Message should be <= 10 characters';
        
        return errors;
    }
    render(){
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email, this.state.message);
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to = "/home">Home </Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <div className = "col-12">
                            <h3>Contact Us</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className = "row row-content">
                        <div className = "col-12">
                            <h3>Location Information</h3>
                        </div>
                        <div className = "col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                                124, Clear Water Bay Road <br/>
                                Clear Water Bay, Kowloon<br/>
                                Lilongwe <br/>
                                <li className = "fa fa-phone fa-lg m-2"></li>: +265 996 668 149<br/>
                                <li className = "fa fa-fax fa-lg m-2"></li>: +265 884 764 626<br/>
                                <li className = "fa fa-envelope fa-lg m-2"></li>: <a>ptckbyamasu@gmail.com </a>                           
                            </address>
                        </div>
                        <div className = "col-12 col-sm-6 offset-sm-1">
                            <h5>Map of our Location</h5>
                        </div>
                        <div className = "col-12 col-sm-11 offset-sm-1">
                            <div className = "btn-group" role = "group">
                                <a role="button" className="btn btn-primary" href="tel:+265 996 668 149"><i className="fa fa-phone"></i> Call</a>
                                <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                                <a role="button" className="btn btn-success" href="mailto:ptckbyamasu@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
        
                            </div>
                        </div>
                    </div>                
                </div>
                <div class="">
                    <div className = "row row-content bg-light d-flex justify-content-center">
                        <div className = "col-12 col-md-9 mb-4">
                            <h3>Send us Your Feedback</h3>
                        </div>
                        <div className="col-12 col-md-9">
                            <Form onSubmit = { this.handleSubmit }>
                                <FormGroup row>
                                    <Label htmlFor="firstname" md = { 2 }>First Name</Label>
                                    <Col md={ 10 }>
                                        <Input type="text" id="firstname" name="firstname" 
                                        placeholder="First Name" 
                                        value = { this.state.firstname }
                                        valid = { errors.firstname === '' }
                                        invalid = { errors.firstname !== ''  }
                                        onChange = { this.handleInputChange }
                                        onBlur = { this.handleBlur('firstname') }/>
                                    </Col>
                                    <FormFeedback>{ errors.firstname }</FormFeedback>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="lastname" md = { 2 }>Last Name</Label>
                                    <Col md={ 10 }>
                                        <Input type="text" id="lastname" name="lastname" placeholder="Last Name"  value = { this.state.lastname }
                                        onChange={this.handleInputChange}
                                        onBlur={ this.handleBlur('lastname') }/>
                                    </Col>
                                    <FormFeedback>{ errors.lastname }</FormFeedback>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="telnum" md = { 2 }>Contact Tel.</Label>
                                    <Col md={ 10 }>
                                        <Input type="text" id="telnum" name="telnum" placeholder="Tel. Number"  value = { this.state.telnum }
                                        onChange={this.handleInputChange}
                                        onBlur={ this.handleBlur('telnum') }/>
                                    </Col>
                                    <FormFeedback>{ errors.telnum }</FormFeedback>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" md = { 2 }>Email</Label>
                                    <Col md={ 10 }>
                                        <Input type="text" id="email" name="email" placeholder="Email"  value = { this.state.email }
                                        onChange={this.handleInputChange}
                                        onBlur={ this.handleBlur('email') }/>
                                    </Col>
                                    <FormFeedback>{ errors.email }</FormFeedback>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size: 6, offset: 2}}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" name="agree" checked={this.state.agree}
                                                onChange={this.handleInputChange}/> {' '}
                                                <strong>May we contact you?</strong>                                            
                                            </Label>                                        
                                        </FormGroup>
                                    </Col>
                                    <Col md={{size: 3, offset: 1}}>
                                        <Input type="select" name="contactType" className="form-control" value={this.state.contactType}
                                        onChange={this.handleInputChange}>
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Input>
                                    </Col>                                
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="message" md = { 2 }>Your Feedback</Label>
                                    <Col md={ 10 }>
                                        <Input type="textarea" id="message" name="message" rows="12"  value = { this.state.message }
                                        onChange={this.handleInputChange}
                                        onBlur={ this.handleBlur('message') }/>
                                    </Col>
                                    <FormFeedback>{ errors.message }</FormFeedback>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={ { size: 10, offset: 2 } }>
                                        <Button type="submit" color="primary">Send Feedback </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;