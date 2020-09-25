 /* tslint:disable */

import React, { Component } from "react";
import Background from "../img/anon.png";
// import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
        
               
    
           
            <div className="container d-none d-md-block">
                <div className="row col-lg-10 col-md-10 col-xl-10" style={{position: 'fixed', bottom: '0px', backgroundColor: 'white', borderRadius: '10px',boxShadow: '0px 0px 10px black'}}>
                    <div className="col-lg-2 col-xl-2 col-md-2" style={{ padding: '5px 20px 5px 20px' }}>
                        <div className="text-center home-link-icons" style={{borderRight: '1px solid black', paddingRight: '20px'}}>
                            <a href="index.html">
                                <span className="fa fa-home" style={{fontSize: '25px', color: 'lightskyblue'}}></span>
                                <h6 style={{ margin: '0px 0px' }}>Home</h6>
                            </a>
                        </div>
                    </div>
            
                    <div className="col-lg-2 col-xl-2 col-md-2" style={{ padding: '5px 20px 5px 20px' }}>
                        <div style={{borderRight: '1px solid black', paddingRight: '20px', textAlign: 'center'}}>
                            <a href="create-fair.html">
                                <span id="fair" className="fa fa-handshake-o" style={{ fontSize: '25px' }}></span>
                                <h6 style={{ margin: '5px 0px' }}>Fair</h6>
                            </a>
                        </div>
                    </div>
            
                    <div className="col-lg-2 col-xl-2 col-md-2" style={{ padding: '5px 20px 5px 20px' }}>
                        <div style={{ borderRight: '1px solid black', paddingRight: '20px', textAlign: 'center' }}>
                            <a href="events.html">
                                <span id="event" className="fa fa-birthday-cake" style={{fontSize: '25px'}}></span>
                            <h6 style={{ margin: '5px 0px' }}>Event</h6>
                            </a>
                        </div>
                    </div>
            
                    <div className="col-lg-2 col-xl-2 col-md-2" style={{ padding: '5px 20px 5px 20px' }}>
                        <div style={{ borderRight: '1px solid black', paddingRight: '20px', textAlign: 'center'}}>
                            <a href="story.html">
                                <span id="story" className="fa fa-music" style={{ fontSize: '25px' }}></span>
                                <h6 style={{ margin: '5px 0px' }}>Story</h6>
                            </a>
                        </div>
                    </div>
            
                    <div className="col-lg-2 col-xl-2 col-md-2" style={{ padding: '5px 20px 5px 20px' }}>
                        <div style={{ borderRight: '1px solid black', paddingRight: '20px', textAlign: 'center' }}>
                            <a href="cart.html">
                                <span id="cart" className="fa fa-cart-arrow-down" style={{ fontSize: '25px' }}></span>
                                <h6 style={{ margin: '5px 0px' }}>Cart</h6>
                            </a>
                        </div>
                    </div>
            
                    <div className="col-lg-2 col-xl-2 col-md-2" style={{ padding: '5px 20px 5px 20px' }}>
                        <div style={{ paddingRight: '20px', textAlign: 'center' }}>
                            <a href="profile.html">
                                <span id="profile" className="fa fa-user" style={{fontSize: '25px'}}></span>
                                <h6 style={{ margin: '5px 0px' }}>Profile</h6>
                            </a>
                        </div>
                    </div>
        
                </div>
          
        
        
    
        
         
            <div className="container-fluid d-none d-sm-block d-block d-md-none d-lg-none d-xl-none">
                <div className="row">
                    <div className="col-sm-10 col-10">
                            <h5 style={{ paddingLeft: '10px', margin: '15px 0px' }}>Coop<span style={{fontWeight: 'bold'}}>LAG</span></h5>
                    </div>
                        <div className="col-sm-2 col-2 p-3" style={{ float: 'right' }}>
                        <a href="cart.html">
                                <span class="fa fa-cart-arrow-down" style={{ display: 'block', fontSize: '20px', paddingRight: '10px' }}></span>
                                <span style={{ fontSize: '15px', display: 'block' }}>Cart</span>
                        </a>
                    </div>	
                </div>
        
                <div className="row">
                        <div className="col-sm-4 col-4" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                            <a href="index.html" className="text-center small-screen-home-links" style={{ paddingBottom: '5px', marginBottom: '1px', borderBottom: '2px solid #6a5acd', display: 'block' }}>Live</a>
                    </div>
                        <div className="col-sm-4 col-4" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                            <a href="visitors.html" className="text-center small-screen-home-links" style={{ paddingBottom: '5px', marginBottom: '1px', display: 'block' }}>Visitors</a>
                    </div>
                        <div className="col-sm-4 col-4" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                            <a href="shop.html" className="text-center small-screen-home-links" style={{ paddingBottom: '5px', marginBottom: '1px', display: 'block' }}>Shop</a>
                    </div>
                </div>
        
        
                    <div className="row" style={{ backgroundImage: "url(" + Background + ")", backgroundSize: 'cover', height: '500px'}}>
                    <div className="col-sm-12 col-12 text-center mt-4">
                            <span style={{ boxShadow: '0px 0px 2px black', borderRadius: '20px', padding: '5px 80px 5px 80px' }} className="bg-white"><span className="text-muted" style={{ fontWeight: 'bold' }}>Vendor's</span> Shop</span>
                    </div>
                </div>
        
        
                
                    <div className="row bg-white pt-2 pb-1" style={{ position: 'fixed', bottom: '0px', width: '100%' }}>
                        <div className="col-sm-1 col-1" style={{ padding: '0px' }}>
        
                    </div>
                    <div className="col-sm-2 col-2">
                        <div style={{textAlign: 'center'}}>
                                <a href="index.html" style={{ color: 'black' }}>
                                    <span className="fa fa-home" style={{ fontSize: '20px' }}></span>
                                <h6 style={{margin: '3px 0px', fontSize: '12px'}}>Home</h6>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-2 col-2">
                            <div style={{ textAlign: 'center' }}>
                            <a href="fair.html" style={{color: 'black'}}>
                                    <span className="fa fa-handshake-o" style={{ fontSize: '20px' }}></span>
                                    <h6 style={{ margin: '3px 0px', fontSize: '12px' }}>Fair</h6>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-2 col-2">
                            <div style={{ textAlign: 'center' }}>
                                <a href="events.html" style={{ color: 'black' }}>
                                    <span className="fa fa-birthday-cake" style={{fontSize: '20px'}}></span>
                                    <h6 style={{ margin: '3px 0px', fontSize: '12px' }}>Event</h6>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-2 col-2">
                            <div style={{ textAlign: 'center' }}>
                                <a href="story.html" style={{ color: 'black' }}>
                                    <span className="fa fa-music" style={{ fontSize: '20px' }}></span>
                                    <h6 style={{ margin: '3px 0px', fontSize: '12px' }}>Story</h6>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-2 col-2">
                            <div className="text-center" style={{ textAlign: 'center' }}>
                                <a href="profile.html" style={{ color: 'black' }}>
                                    <span className="fa fa-user" style={{ fontSize: '20px' }}></span>
                                    <h6 style={{ margin: '3px 0px', fontSize: '12px' }}>Profile</h6>
                            </a>
                        </div>
                    </div>
                        <div className="col-sm-1 col-1" style={{ padding: '0px' }}>
        
                    </div>
                </div>
                
                </div>
                
</div>






        )
    }
}

export default Footer;