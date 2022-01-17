import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props){
    return (
        <div className = "footer">
           <div className = "container">
                <div className ="row justify-content-center">
                    <div className = "col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className = "list-unstyled">
                            <li><Link to = "/home">Home</Link></li>
                            <li><Link to = "/aboutus" >About</Link></li>
                            <li><Link to = "/menu">Menu</Link></li>
                            <li><Link to = "/contactus">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className = "col-7 col-sm-5">
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
                    <div className = "col-12 col-sm-4 align">
                        <a className = "btn btn-social-icon btn-google m-1"></a>
                        <a className = "btn btn-social-icon btn-facebook m-1"></a>
                        <a className = "btn btn-social-icon btn-linkedin m-1"></a>
                        <a className = "btn btn-social-icon btn-twitter m-1"></a>
                        <a className = "btn btn-social-icon btn-google m-1"></a>
                        <a className = "btn btn-social-icon m-1" href = "mailto: confusionrestaurant@gmail.com"></a>
                    </div>
                </div>
           </div>
           <div className = "row justify-content-center">
               <div className = "col-auto">
                   <p>© Copyright 2022 Restaurant Con Fusion </p>
               </div>
           </div>
        </div>
    );
}

export default Footer;