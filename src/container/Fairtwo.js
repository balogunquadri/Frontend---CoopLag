import React, { Component } from "react";
// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import Background from "../img/anon.png";

class Fairtwo extends Component {
  render() {
      return (
          
        
    
          <>
              
             
	<div className="container">
        <div className="m-2">
            <h4>Step 2</h4>
             <span id="sub-step-two" className="modal-step-one-sub-text">Set up Environment</span>
        </div>
		<div className="row modal-step-one-second-row">
                <div className="pt-4 col-lg-6 col-md-6 col-xl-6 modal-step-one-second-row-col-first">
                    
                    <div className="pl-5 pt-1 pb-1 pr-5 mb-3 modal-step-one-second-row-col-first-form-con">
                        <label className="step-one-modal-form-label-text" for="">Total Expected Vendors</label>
                        <select name="name" className="form-control custom-select step-one-modal-form-input">
                            <option value="">one</option>
                            <option value="">two</option>
                            <option value="">three</option>
                        </select>
                    </div>

                    <div className="pl-5 pt-1 pb-1 pr-5 mb-3 modal-step-one-second-row-col-first-form-con">
                        <label className="step-one-modal-form-label-text" for="">Fair Type</label> 
                        <select name="" className="form-control custom-select step-one-modal-form-input">
                            <option value=""></option>
                            <option value="">Fashion Fair</option>
                            <option value="">Electronics Fair</option>
                            <option value="">Game Fair</option>
                            <option value="">Sports Fair</option>
                        </select>
                    </div>

                    <div className="pl-5 pt-1 pb-1 pr-5 mb-3 modal-step-one-second-row-col-first-form-con">
                        <label className="step-one-modal-form-label-text" for="">Fair Environment</label> 
                        <select name="" className="form-control step-one-modal-form-input custom-select">
                            <option value=""></option>
                            <option value="">Fashion Fair</option>
                            <option value="">Electronics Fair</option>
                            <option value="">Game Fair</option>
                            <option value="">Sports Fair</option>
                        </select>
                    </div>

                    <h6 className="step-two-panel-session-text">Set Up Events</h6>
                    <div className="pl-4 pt-1 pb-1 pr-4 mb-3 modal-step-one-second-row-col-first-form-con-text-area-con">
                        
                        <div className="d-flex">
                            <div className="p-2">
                                <span className="step-two-events-elements">Conference</span>
                                <input type="radio" value="" name="events" className="step-two-radio-btn" />
                            </div>
                            <div className="p-2">
                                <span className="step-two-events-elements">Network Room</span>
                                <input type="radio" value="" name="events" className="step-two-radio-btn" />
                            </div>
                            <div className="p-2">
                                <span className="step-two-events-elements">Panel Session</span>
                                <input type="radio" value="" name="events" className="step-two-radio-btn" />
                            </div>
                        </div>
                    </div>

                    <h6 className="step-two-panel-session-text">Set Up Panel Session</h6>
                    <div className="d-flex">
                        <div className="pt-1 pb-1 mb-3 mr-5 modal-step-one-second-row-col-first-form-con">
                            <label className="step-one-modal-form-label-text" for="">Number of Panelist</label>
                            <select name="" className="form-control step-one-modal-form-input custom-select">
                                <option value=""></option>
                                <option value="">Fashion Fair</option>
                                <option value="">Electronics Fair</option>
                                <option value="">Game Fair</option>
                                <option value="">Sports Fair</option>
                            </select>
                        </div>
                        <div className="pt-1 pb-1 mb-3 modal-step-one-second-row-col-first-form-con">
                            <label className="step-one-modal-form-label-text" for="">Number of Speakers</label>
                            <select name="" className="form-control step-one-modal-form-input custom-select">
                                <option value=""></option>
                                <option value="">Fashion Fair</option>
                                <option value="">Electronics Fair</option>
                                <option value="">Game Fair</option>
                                <option value="">Sports Fair</option>
                            </select>
                        </div>

                    </div>
                </div>
                

                <div className="col-lg-6 col-xl-6 col-md-6">
                          <div id="demo" className="carousel slide mb-4" data-ride="carousel" style={{ height: '200px' }}>

                        
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>

                       
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                      <img src="mylager.jpg" alt="Los Angeles" style={{ height: '200px', borderRadius: '10px', width: '100%' }} />
                            </div>
                            <div className="carousel-item">
                                          <img src="hgfd.jpg" alt="Chicago" style={{ height: '200px', borderRadius: '10px', width: '100%' }} />
                            </div>
                            <div className="carousel-item">
                                          <img src="online-shopping-banner_82574-3393.jpg" alt="New York" style={{ height: '200px', borderRadius: '10px', width: '100%' }} />
                            </div>
                        </div>

    
                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>

                    <h6 className="step-two-panel-session-text mt-4">Select Conference Room</h6>
                    <div className="mb-1 step-two-conference-room"></div>

                    <h6 className="step-two-panel-session-text mt-4">Select Panel Session Room</h6>
                    <div className="mb-1 step-two-conference-room"></div>
                </div>
            </div>

            <div className="row modal-step-one-second-row">
                <div className="col-lg-2 col-xl-2 col-md-2">
                    <a href="fair-step-three.html" className="btn btn-success btn-block">Proceed</a>
                </div>

                <div className="col-lg-2 col-xl-2 col-md-2">
                    <a href="fair-step-one.html" className="btn btn-outline-success btn-block">Back</a>
                </div>
            </div>

                      </div>
                    

  </>
                                                     
      )
  }
}

export default Fairtwo;