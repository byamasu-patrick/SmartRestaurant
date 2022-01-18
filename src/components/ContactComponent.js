import React, { Component } from "react";

function Contact(){
    return (
        <div className = "container">
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
            </div>
        </div>
    );


}

export default Contact;