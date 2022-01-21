import React, { Component } from 'react';
import { Button, Label, Modal,ModalHeader, ModalBody, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form'; 

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
        alert("Current State is: "+ JSON.stringify(values));
        console.log("Current State is: "+ JSON.stringify(values));
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

export default CommentsForm;