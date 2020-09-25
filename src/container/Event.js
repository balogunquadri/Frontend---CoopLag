import React, { Component } from "react";
import Background from "../img/anon.png";
import Header from "../component/Header";
import Footer from "../component/Footer";

class Event extends Component {
  render() {
      return (
          
          <>
              <Header />
              <div className="container-fluid d-none d-md-block" style={{ marginBottom: '100px' }}>
                  <div className="row" style={{ paddingBottom: '20px' }}>
            <div className="col-lg-8 col-xl-8 col-md-7 pt-4">
                <div className="row">
                    <div className="col-lg-12 col-xl-12 col-md-12">
                                  <button className="btn btn-outline-secondary" style={{ padding: '5px 20px 5px 20px' }}>Conference</button>
                                  <button className="btn btn-outline-secondary" style={{ padding: '5px 20px 5px 20px' }}>Panel Session</button>
                                  <button className="btn btn-outline-secondary" style={{ padding: '5px 20px 5px 20px' }}>Networking Room</button>

                    </div>
                              <div className="col-lg-12 col-xl-12 col-md-12 pt-3" style={{ display: 'flex' }}>
                                  <div style={{ width: '85%',  backgroundImage: "url(" + Background + ")", backgroundSize: 'cover' }}>

                                  </div>
                                  
                        <div style={{width: '1%'}}></div>
                                  <div style={{ width: '10%' }} >
                                      <ul>
                                      <li style={{ backgroundColor: 'grey', borderRadius: '5px', listStyleType: 'none', textAlign: 'center', width: '40%' }}><span className="fa fa-sort-asc" style={{ color: 'white', fontSize: '25px' }}></span></li>
                                      
                                      <ul style={{ margin: '0px', padding: '0px', listStyleType: 'none', backgroundColor: 'white', width: '40%' }}>	
                                <img src="godofwar54.jpg" alt="" className="rounded-circle" style={{ height: '30px', width: '30px', marginLeft: '3px', marginBottom: '2px', marginTop: '2px' }} />
                            <img src="godofwar54.jpg" alt="" className="rounded-circle" style={{ height: '30px', width: '30px', marginLeft: '3px', marginBottom: '2px' }} />
                            <img src="godofwar54.jpg" alt="" className="rounded-circle" style={{ height: '30px', width: '30px', marginLeft: '3px', marginBottom: '2px' }} />
                            <img src="godofwar54.jpg" alt="" className="rounded-circle" style={{ height: '30px', width: '30px', marginLeft: '3px', marginBottom: '2px' }} />
                                      </ul>
                                          

                                      <li style={{ backgroundColor: 'grey', borderRadius: '5px', listStyleType: 'none', textAlign: 'center', width: '40%' }}><span className="fa fa-sort-desc" style={{color: 'white', fontSize: '25px'}}> </span></li>
                                  <li style={{ width: '45%', display: 'block', textAlign: 'center', marginTop: '10px' }}><span className="fa fa-eye" style={{ fontSize: '25px' }}></span><br /><span>1000</span></li>
                                  <li style={{ width: '45%', display: 'block', textAlign: 'center', marginTop: '10px' }}><span className="fa fa-sign-language" style={{ fontSize: '25px' }}></span><br /><span>670</span></li>
                                  <li style={{ width: '45%', display: 'block', textAlign: 'center', marginTop: '10px' }}><span className="fa fa-commenting-o" style={{ fontSize: '25px' }}></span><br /><span>68</span></li>
                                  </ul>
                        </div>
                    </div>
                          

                              <div className="col-lg-12 col-xl-12 col-md-12 pt-3" style={{ display: 'flex' }}>
                        <div>
                                      <h6 style={{ marginLeft: '50px' }}>Ask Question<span className="fa fa-toggle-on" style={{ marginLeft: '20px' }}></span></h6> 
                        </div>
                        <div>
                                      <h6 style={{ marginLeft: '50px' }}>Clap <span className="fa fa-sign-language" style={{ marginLeft: '20px' }}></span></h6>
                        </div>
                        <div>
                                      <h6 style={{ marginLeft: '50px' }}>Audio<span className="fa fa-toggle-on" style={{ marginLeft: '20px' }}></span></h6>
                        </div>
                    </div>

                </div>
            </div>


            <div className="col-lg-4 col-xl-4 col-md-5 pt-3 d-none d-md-block">
                
                          <div className="scroll" style={{ height: '490px', overflow: 'auto', backgroundColor: 'white', borderRadius: '5px', padding: '20px' }}>
                    <div className="row">
                        <div className="col-lg-12 col-xl-12 col-md-12 pt-3">
                                      <h4 className="text-muted text-center"><span style={{ fontWeight: 'bold' }} className="">Event Schedule</span></h4>
                        </div>
                        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-6 col-8 text-center">
                                      <a href="events.html"><button id="events-btn" className="btn bg-secondary text-white" style={{ borderRadius: '20px 0px 0px 20px', marginRight: '-5px', padding: '5px 25px 5px 25px' }}>Events</button></a>
                                      <a href="schedule.html"><button id="schedule" className="btn btn-outline-secondary" style={{ borderRadius: '0px', marginRight: '-5px', padding: '5px 25px 5px 25px' }}>Schedule</button></a>
                                      <a href="speaker.html"><button id="speakers-btn" className="btn btn-outline-secondary" style={{ borderRadius: '0px 20px 20px 0px', padding: '5px 25px 5px 25px' }}>Speakers</button></a>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 mt-3 mb-4">
                                      <div id="demo" className="carousel slide" data-ride="carousel" style={{ height: '200px' }}>

                                
                                <ul className="carousel-indicators">
                                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                                    <li data-target="#demo" data-slide-to="1"></li>
                                    <li data-target="#demo" data-slide-to="2"></li>
                                </ul>

                                
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                                  <img src="preview_7021774.jpg" alt="Los Angeles" style={{ height: '200px', borderRadius: '10px', width: '100%' }} />
                                    </div>
                                    <div className="carousel-item">
                                                  <img src="hgfd.jpg" alt="Chicago" style={{ height: '200px', borderRadius: '10px', width: '100%' }}/>
                                    </div>
                                    <div className="carousel-item">
                                                  <img src="online-shopping-banner_82574-3393.jpg" alt="New York" style={{ height: '200px', borderRadius: '10px', width: '100%' }}/>
                                    </div>
                                </div>

                                
                                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </a>
                                <a className="carousel-control-next" href="#demo" data-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </a>

                            </div>
                        </div>

                        <div className="col-xl-12 col-lg-12 col-md-12">

                            <div className="row mb-4">
                                          <div className="col-lg-8 col-xl-8 col-md-8" style={{ paddingRight: '0px' }}>
                                              <div style={{ borderTop: '2px solid cyan', borderBottom: '2px solid cyan', padding: '8px 10px' }}>
                                                  <h6 style={{ fontSize: '14px' }}><span style={{ fontWeight: 'bold', paddingRight: '10px' }}>Topic:</span>The power of AI technology in oil gas</h6>
                                                  <img src="godofwar54.jpg" alt="" className="rounded-circle" style={{ height: '30px', width: '30px', float: 'left' }} />
                                                  <h6 style={{ margin: '0px', display: 'inline', paddingLeft: '15px', fontSize: '14px' }}>Avis Charles</h6>
                                                  <h6 style={{ margin: '0px', paddingLeft: '50px', fontSize: '12px' }}>Speaker</h6>
                                        
                                    </div>
                                </div>
                                          <div className="col-lg-4 col-xl-4 col-md-4" style={{ paddingLeft: '0px' }}>
                                              <div style={{ backgroundColor: 'magenta', padding: '10px' }}>
                                                  <h2 className="text-center" style={{ fontWeight: 'bolder', color: 'white', margin: '0px' }}>18th</h2>
                                                  <h6 style={{ textAlign: 'right', margin: '0px', color: 'white', fontSize: '15px' }}>August</h6>
                                                  <h6 className="text-center" style={{ fontSize: '12px', color: 'white', fontWeight: 'bold' }} >9:00AM</h6>
                                    </div>       
                                </div>
                            </div>

                            <div className="row mb-4">
                                          <div className="col-lg-8 col-xl-8 col-md-8" style={{ paddingRight: '0px' }}>
                                    <div style={{borderTop:'2px solid cyan', borderBottom: '2px solid cyan', padding: '8px 10px'}}>
                                                  <h6 style={{ fontSize: '14px' }}><span style={{ fontWeight: 'bold', paddingRight: '10px' }}>Topic:</span>The power of AI technology in oil gas</h6>
                                                  <img src="godofwar54.jpg" alt="" className="rounded-circle" style={{ height: '30px', width: '30px', float: 'left' }} />
                                                      <h6 style={{ margin: '0px', display: 'inline', paddingLeft: '15px', fontSize: '14px' }}>Avis Charles</h6>
                                                      <h6 style={{ margin: '0px', paddingLeft: '50px', fontSize: '12px' }}>Speaker</h6>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-md-4" style={{paddingLeft: '0px'}}>
                                              <div style={{ backgroundColor: 'magenta', padding: '10px' }}>
                                                  <h2 className="text-center" style={{ fontWeight: 'bolder', color: 'white', margin: '0px' }}>18th</h2>
                                                  <h6 style={{ textAlign: 'right', margin: '0px', color: 'white', fontSize: '15px' }}>August</h6>
                                                  <h6 className="text-center" style={{ fontSize: '12px', color: 'white', fontWeight: 'bold' }}>9:00AM</h6>
                                    </div>       
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

         <Footer />
    </>
                                                     
      )
  }
}

export default Event;