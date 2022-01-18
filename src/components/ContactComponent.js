import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Contact(){
    return (
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
    );


}

export default Contact;