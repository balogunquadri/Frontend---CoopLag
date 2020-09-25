import React, { Component } from "react";
import ScriptTag from 'react-script-tag';
// import $ from 'jquery';


import './App.css';
// import { Link } from "react-router-dom";

class DashboardPage extends Component {
  render() {
    return (
      <>
        <ScriptTag  isHydrating={true} type="text/javascript" src="../component/index.js" />
        <section className="container-fluid section-two-main-con">
          <div className="row section-two-row-one">
            <div className="col-lg-2 col-xl-2 col-md-2 pt-4 pb-5 section-two-row-one-first-col d-none d-md-block">
              <ul className="section-two-ul-container">
                <li className="section-two-first-col-list-item">
                  <span className="fa fa-home section-two-first-col-links-icon"></span>
                  Home
                </li>
                <li className="section-two-first-col-list-item">
                  <span className="fa fa-gear section-two-first-col-links-icon"></span>
                  Setting
                </li>
              </ul>
            </div>

            <div className="col-lg-10 col-xl-10 col-md-10 section-two-second-col">
              <h3 className="pt-5 pl-5 section-two-row-one-second-col-first-text">
                Hi Charles,
              </h3>
              <h6 className="pl-5 pt-2 section-two-row-one-second-text pb-5">
                Welcome to FairSqure. You can get started by creating
                <br /> your own fair in less than 10 minutes
              </h6>
              <span
                 id="openStepOneModal"
                // href="!#" data-toggle="modal"
                // data-target="#openStepOneModal"
                className="pl-5 fa fa-plus-square section-two-row-two-col-two-add-icon"
              ></span>
              <span className="pt-5 pl-5 section-two-row-two-create-text">
                Create New Fair
              </span>
              <h4 className="pl-5 section-two-row-one-second-col-all-text mt-5">
                All Fair
              </h4>

              <table className="table table-responsive-xl table-responsive-sm table-responsive-lg table-responsive-md table-borderless section-two-row-two-table-container">
                <tr className="section-two-row-two-table-row-one">
                  <td className="table-row-one-cell-icon">
                    <span className="fa fa-trash table-row-one-cell-trash-icon"></span>
                  </td>
                  <td className="table-row-one-cell-text text-primary">
                    01/09/2020 9:40AM
                  </td>
                  <td className="table-row-one-cell-text">Outdoor#20</td>
                  <td className="table-row-one-cell-icon">
                    <span className="fa fa-toggle-on table-row-one-cell-toggle-icon"></span>
                  </td>
                  <td className="table-row-one-cell-text">Standard</td>
                  <td className="table-row-one-cell-text">Edit</td>
                  <td className="table-row-one-cell-text-login">
                    Login to Fair Admin
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </section>

              
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
                   

               
                <div className="tab-pane container fade pt-3" id="menu1">

                    <div className="row modal-step-one-second-row">
                        <div className="pt-4 col-lg-6 col-md-6 col-xl-6 modal-step-one-second-row-col-first">
                            
                            <div className="pl-5 pt-1 pb-1 pr-5 mb-3 modal-step-one-second-row-col-first-form-con">
                                <label className="step-one-modal-form-label-text" for="">Total Expected Vendors</label>
                                <select name="" className="form-control step-one-modal-form-input">
                                    <option value=""></option>
                                    <option value="">Fashion Fair</option>
                                    <option value="">Electronics Fair</option>
                                    <option value="">Game Fair</option>
                                    <option value="">Sports Fair</option>
                                </select>
                            </div>
    
                            <div className="pl-5 pt-1 pb-1 pr-5 mb-3 modal-step-one-second-row-col-first-form-con">
                                <label className="step-one-modal-form-label-text" for="">Fair Type</label> 
                                <select name="" className="form-control step-one-modal-form-input">
                                    <option value=""></option>
                                    <option value="">Fashion Fair</option>
                                    <option value="">Electronics Fair</option>
                                    <option value="">Game Fair</option>
                                    <option value="">Sports Fair</option>
                                </select>
                            </div>
    
                            <div className="pl-5 pt-1 pb-1 pr-5 mb-3 modal-step-one-second-row-col-first-form-con">
                                <label className="step-one-modal-form-label-text" for="">Fair Environment</label> 
                                <select name="" className="form-control step-one-modal-form-input">
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
                                <div className="pl-3 pt-1 pb-1 pr-3 mb-3 mr-5 modal-step-one-second-row-col-first-form-con">
                                    <label className="step-one-modal-form-label-text" for="">Number of Panelist</label>
                                    <select name="" className="form-control step-one-modal-form-input">
                                        <option value=""></option>
                                        <option value="">Fashion Fair</option>
                                        <option value="">Electronics Fair</option>
                                        <option value="">Game Fair</option>
                                        <option value="">Sports Fair</option>
                                    </select>
                                </div>
                                <div className="pl-3 pt-1 pb-1 pr-3 mb-3 modal-step-one-second-row-col-first-form-con">
                                    <label className="step-one-modal-form-label-text" for="">Number of Speakers</label>
                                    <select name="" className="form-control step-one-modal-form-input">
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
    
                            <h6 className="step-two-panel-session-text mt-2">Select Conference Room</h6>
                            <div className="mb-1 step-two-conference-room"></div>
    
                            <h6 className="step-two-panel-session-text mt-2">Select Panel Session Room</h6>
                            <div className="mb-1 step-two-conference-room"></div>
                        </div>
                    </div>
    
    
                    <div className="row modal-step-one-second-row">
                        <div className="col-lg-2 col-xl-2 col-md-2">
                            <button id="goToStepThree" className="btn btn-success btn-block">Proceed</button>
                        </div>
    
                        <div className="col-lg-2 col-xl-2 col-md-2">
                            <button id="goBackToStepThree" className="btn btn-outline-success btn-block">Back</button>
                        </div>
                    </div>
                

                    </div>
                    
                    <div className="tab-pane container fade" id="menu2">

<div className="row modal-step-one-second-row">

    <div className="pt-4 col-lg-6 col-md-6 col-xl-6 modal-step-one-second-row-col-first">    
        <h6 className="mb-4 text-muted vendor-sign-up-title">Vendors Signup Link</h6>
        <div className="d-flex">
            <div className="vendor-signup-default-link-con">
                <h6 className="vendor-signup-default-link pl-4 pt-3 pb-3 pr-3">https://vcfair.com</h6>
            </div>
            <div className="vendor-signup-custom-link-con pl-3 pt-2 pb-2 pr-4">
                <input type="text" placeholder="Customize fair URL" className="form-control vendor-signup-input" />
            </div>
        </div>
        
        
        <h6 className="vendor-name-text mt-5 mb-3"><input type="radio" className="vendor-radio-name" />Collect Name & Phone Number</h6>
        <h5 className="text-muted mt-2 mb-3 vendor-additional-info">Collect Additional information from Vendors</h5>
        <div className="d-flex">
            <div className="pt-3 pr-3">
                <h6 className="add-field-text"><span className="fa fa-plus add-vendor-field-icon"></span>Add New Field</h6>
            </div>
            <div>
                <div className="pl-5 pt-1 pb-1 pr-5 mb-3 modal-step-one-second-row-col-first-form-con">
                    <label className="step-one-modal-form-label-text" for="">Field Type</label> 
                    <select name="" className="form-control step-one-modal-form-input">
                        <option value="">Input/File etc</option>
                        <option value="">Electronics Fair</option>
                        <option value="">Game Fair</option>
                        <option value="">Sports Fair</option>
                    </select>
                </div>
            </div>  
        </div>

    </div>
  
 

    <div className="col-lg-6 col-xl-6 col-md-6 pt-4">
        <h5>Set Vendor's Sign Up Free</h5>

        <div className="row">
            <div className="col-lg-7 col-xl-7 col-md-7">
                <div className="pl-5 pt-1 pb-1 pr-5 mb-3 modal-step-one-second-row-col-first-form-con">
                    <label className="step-one-modal-form-label-text" for="">Vendor's Category</label>
                    <input type="text" className="form-control step-one-modal-form-input" />
                </div>

                <div className="pl-5 pt-1 pb-1 pr-5 mb-3 modal-step-one-second-row-col-first-form-con">
                    <label className="step-one-modal-form-label-text" for="">Vendor's Sign up price</label>
                    <input type="text" className="form-control step-one-modal-form-input" />
                </div>

                <div className="pl-5 pt-1 pb-1 pr-5 mb-3 modal-step-one-second-row-col-first-form-con">
                    <label className="step-one-modal-form-label-text" for="">Select Category Features</label>
                    <input type="text" className="form-control step-one-modal-form-input" />
                </div>
            </div>

            <div className="col-lg-5 col-xl-5 col-md-5 add-feature-con">
                <h6 className="add-feature-text"><span className="fa fa-plus add-vendor-field-icon"></span>Add Another Feature</h6>
            </div>
        </div>

        <h5 className="add-field-text mt-4"><span className="fa fa-plus add-vendor-field-icon"></span>Add Another Category</h5>     
    </div>

</div>


<div className="row step-three-second-row">
    <div className="col-lg-2 col-xl-2 col-md-2">
        <button id="StepTwoNext" className="btn btn-success btn-block">Proceed</button>
    </div>

    <div className="col-lg-2 col-xl-2 col-md-2">
        <button id="closeStepTwoModal" className="btn btn-outline-success btn-block">Back</button>
    </div>
</div>

</div>
<div className="tab-pane container fade" id="menu3">

<h6 className="text-muted p-3 step-four-title-text">Set up how you want people to you in your Fair</h6>
<div className="row modal-step-one-second-row">
    
    <div className="pt-4 col-lg-6 col-md-6 col-xl-6 modal-step-one-second-row-col-first">    
        <h6 className="step-four-payment-option"><input type="radio" name="vendor-payment" className="vendor-payment-method" /> Payment Option A</h6>
        <h6 className="step-four-payment-option"><input type="radio" name="vendor-payment" className="vendor-payment-method" /> Payment Option C</h6>
    </div>

    <div className="pt-4 col-lg-6 col-md-6 col-xl-6 modal-step-one-second-row-col-first">    
        <h6 className="step-four-payment-option"><input type="radio" name="vendor-payment" className="vendor-payment-method" /> Payment Option B</h6>
        <h6 className="step-four-payment-option"><input type="radio" name="vendor-payment" className="vendor-payment-method" /> Payment Option D</h6>
    </div>

</div>


<div className="row step-three-second-row">
    <div className="col-lg-2 col-xl-2 col-md-2">
        <button id="StepTwoNext" className="btn btn-success btn-block">Preview</button>
    </div>

    <div className="col-lg-2 col-xl-2 col-md-2">
        <button id="closeStepTwoModal" className="btn btn-outline-success btn-block">Back</button>
    </div>
</div>

</div>




</div>    


<div className="row modal-step-one-tab-menu">
<div className="col-md-3 p-2">
    <h6 className="modal-step-one-text-active">Step 1</h6>
    <span className="modal-step-one-sub-text-active">Fair Information</span>
</div>
<div className="col-md-3 p-2">
    <h6 className="modal-step-one-text stepOneNextBtn">Step 2</h6>
</div>
<div className="col-md-3 p-2">
    <h6 className="modal-step-one-text">Step 3</h6>
</div>
<div className="col-md-3 p-2">
    <h6 className="modal-step-one-text">Step 4</h6>
</div>    
</div>


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
    <button className="btn btn-success btn-block stepOneNextBtn">Proceed</button>
</div>

<div className="col-lg-2 col-xl-2 col-md-2">
    <button className="btn btn-outline-warning btn-block closeStepOneModal">Cancel</button>

</div>   
</div>




</div>
</div>
</div>
</div>
</div>



<div className="modal fade" data-backdrop="static" id="StepTwo" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-xl modal-md" role="document" style={{ backgroundColor: 'white', borderRadius: '5px' }} />
          <div className="modal-content" style={{ borderRadius: '5px 5px 0px 0px', width: '100%', height: '1000px' }}>
<div className="modal-body">
<div className="container-fluid modal-step-one-create-fair-container">


<div className="row modal-step-one-tab-menu">
<div className="col-md-3 p-2">
    <h6 className="modal-step-one-text">Step 1</h6>
</div>
<div className="col-md-3 p-2">
    <h6 className="modal-step-one-text-active">Step 2</h6>
    <span className="modal-step-one-sub-text-active">Step up Environment</span>
</div>
<div className="col-md-3 p-2">
    <h6 className="modal-step-one-text">Step 3</h6>
</div>
<div className="col-md-3 p-2">
    <h6 className="modal-step-one-text">Step 4</h6>
</div>
</div>



<div className="row modal-step-one-second-row">
<div className="pt-4 col-lg-6 col-md-6 col-xl-6 modal-step-one-second-row-col-first">
    
    <div className="pl-5 pt-1 pb-1 pr-5 mb-3 modal-step-one-second-row-col-first-form-con">
        <label className="step-one-modal-form-label-text" for="">Total Expected Vendors</label>
        <select name="" className="form-control step-one-modal-form-input">
            <option value=""></option>
            <option value="">Fashion Fair</option>
            <option value="">Electronics Fair</option>
            <option value="">Game Fair</option>
            <option value="">Sports Fair</option>
        </select>
    </div>

    <div className="pl-5 pt-1 pb-1 pr-5 mb-3 modal-step-one-second-row-col-first-form-con">
        <label className="step-one-modal-form-label-text" for="">Fair Type</label> 
        <select name="" className="form-control step-one-modal-form-input">
            <option value=""></option>
            <option value="">Fashion Fair</option>
            <option value="">Electronics Fair</option>
            <option value="">Game Fair</option>
            <option value="">Sports Fair</option>
        </select>
    </div>

    <div className="pl-5 pt-1 pb-1 pr-5 mb-3 modal-step-one-second-row-col-first-form-con">
        <label className="step-one-modal-form-label-text" for="">Fair Environment</label> 
        <select name="" className="form-control step-one-modal-form-input">
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
        <div className="pl-3 pt-1 pb-1 pr-3 mb-3 mr-5 modal-step-one-second-row-col-first-form-con">
            <label className="step-one-modal-form-label-text" for="">Number of Panelist</label>
            <select name="" className="form-control step-one-modal-form-input">
                <option value=""></option>
                <option value="">Fashion Fair</option>
                <option value="">Electronics Fair</option>
                <option value="">Game Fair</option>
                <option value="">Sports Fair</option>
            </select>
        </div>
        <div className="pl-3 pt-1 pb-1 pr-3 mb-3 modal-step-one-second-row-col-first-form-con">
            <label className="step-one-modal-form-label-text" for="">Number of Speakers</label>
            <select name="" className="form-control step-one-modal-form-input">
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
    <h6>Banner Slider</h6>
    <div id="demo" className="carousel slide mb-4" data-ride="carousel" style={{ height: '200px'}} />

        
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

    <h6 className="step-two-panel-session-text mt-2">Select Conference Room</h6>
    <div className="mb-1 step-two-conference-room"></div>

    <h6 className="step-two-panel-session-text mt-2">Select Panel Session Room</h6>
    <div className="mb-1 step-two-conference-room"></div>
</div>
</div>


<div className="row modal-step-one-second-row">
<div className="col-lg-2 col-xl-2 col-md-2">
    <button id="StepTwoNext" className="btn btn-success btn-block">Proceed</button>
</div>

<div className="col-lg-2 col-xl-2 col-md-2">
    <button id="closeStepTwoModal" className="btn btn-outline-warning btn-block">Cancel</button>
</div>
</div>



</div>
</div>
        </div> 
        {/* <Script src="../component/index.js"  type="text/javascript"></Script> */}





      </>
    );
  }
}

export default DashboardPage;
