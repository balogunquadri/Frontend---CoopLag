import React, { Component } from "react";
// import { Link } from "react-router-dom";

class DashboardModal extends Component {
  render() {
    return (
      <>
       
<div className="modal fade" data-backdrop="static" id="createFairStepOne" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-xl modal-md" role="document" style={{ backgroundColor: 'white', borderRadius: '5px' }}>
                    <div className="modal-content" style={{ borderRadius: '5px 5px 0px 0px', width: '100%' }}>
        <div className="modal-body">
            <div className="container-fluid modal-step-one-create-fair-container">
                <h6 className="step-up-title-text pt-2 pb-2">Create Your Fair in four steps</h6>

            <ul className="nav nav-tabs row">
                <li className="nav-item col-lg-3 col-xl-3 col-md-3">
                    <span id="stepOneLink" className="nav-link active modal-step-one-text-active" data-toggle="tab" data-target="#home" >Step 1</span>
                    <span className="modal-step-one-sub-text-active">Fair Information</span>
                </li> 
                <li className="nav-item col-lg-3 col-xl-3 col-md-3">
                    <span id="stepTwoLink" className="nav-link" data-toggle="tab" data-target="#menu1">Step 2</span>
                </li>
                <li className="nav-item col-lg-3 col-xl-3 col-md-3">
                    <a id="stepThreeLink" href="!#" className="nav-link" data-toggle="tab" data-target="#menu2">Step 3</a>
                </li>
                <li className="nav-item col-lg-3 col-xl-3 col-md-3">
                    <a id="stepFourLink" href="!#" className="nav-link" data-toggle="tab" data-target="#menu3">Step 4</a>
                </li>
            </ul>
            
        
            <div className="tab-content">
                <div className="tab-pane container active pt-3" id="home">
                    <div className="row modal-step-one-second-row">
                        <div className="pt-4 col-lg-6 col-md-6 col-xl-6 modal-step-one-second-row-col-first">
                            
                            <div className="pl-5 pt-1 pb-1 pr-5 mb-3 modal-step-one-second-row-col-first-form-con">
                                <label className="step-one-modal-form-label-text" for="">Name your Fair</label>
                                <input type="text" className="form-control step-one-modal-form-input" />
                            </div>
    
                            <div className="pl-5 pt-1 pb-1 pr-5 mb-3 modal-step-one-second-row-col-first-form-con">
                                <label className="step-one-modal-form-label-text" for="">Select Fair Category</label>
                               
                                <select name="" className="form-control step-one-modal-form-input">
                                    <option value=""></option>
                                    <option value="">Fashion Fair</option>
                                    <option value="">Electronics Fair</option>
                                    <option value="">Game Fair</option>
                                    <option value="">Sports Fair</option>
                                </select>
                            </div>
    
                            <div className="pl-4 pt-1 pb-1 pr-4 mb-3 modal-step-one-second-row-col-first-form-con-text-area-con">
                                <label className="step-one-modal-form-label-text" for="">Fair Description</label>
                               <textarea name="" id="" cols="30" rows="10" className="form-control step-one-modal-form-textarea"></textarea>
                            </div>
    
                            <div className="d-flex">
                                <div className="pl-3 pt-1 pb-1 pr-3 mb-3 mr-5 modal-step-one-second-row-col-first-form-con">
                                    <label className="step-one-modal-form-label-text" for="">Start Date</label>
                                    <input type="text" className="form-control step-one-modal-form-input" />
                                </div>
                                <div className="pl-3 pt-1 pb-1 pr-3 mb-3 modal-step-one-second-row-col-first-form-con">
                                    <label className="step-one-modal-form-label-text" for="">End Date</label>
                                    <input type="text" className="form-control step-one-modal-form-input" />
                                </div>
    
                            </div>
                        </div>
                       
    
                        <div className="col-lg-6 col-xl-6 col-md-6">
                            <h6>Banner Slider</h6>
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
    
    
                            <h6>Dimensions: xx bb yy</h6>
                            <div className="mb-1 step-one-upload-image-con"></div>
                            <h6 className="mb-3">Upload Image</h6>
    
                            <div className="d-flex">
                                <div className="p-1">
                                    <div className="mb-1 step-one-upload-image-con"></div>
                                    <h6 className="mb-3">Partner's Logo</h6>
                                </div>
                                <div className="step-one-add-partner-con">
                                    <span className="pl-5 fa fa-plus-square section-two-row-two-col-two-add-icon"></span>
                                    <h6>Add another partner</h6>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row modal-step-one-second-row">
                        <div className="col-lg-2 col-xl-2 col-md-2">
                            <button id="goToStepTwo" className="btn btn-success btn-block">Proceed</button>
                        </div>
    
                        <div className="col-lg-2 col-xl-2 col-md-2">
                            <button id="closeModal" className="btn btn-outline-success btn-block">Cancel</button>
                        </div>
                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
      </>
                            
    );
  }
}

export default DashboardModal;
