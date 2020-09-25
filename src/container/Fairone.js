import React, { Component } from "react";
// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import Background from "../img/anon.png";

class Fairone extends Component {
  render() {
      return (
          
        
    
          <>
              
              <div className="container">
		<div className="m-2">
            <h4>Step 1</h4>
            <span id="sub-step-one" className="modal-step-one-sub-text">Fair Information</span>
         </div>
		<div className="row modal-step-one-second-row">
			
            <div className="pt-4 col-lg-6 col-md-6 col-xl-6 modal-step-one-second-row-col-first">
                
                <div className="pl-5 pt-1 pb-1 pr-5 mb-3 modal-step-one-second-row-col-first-form-con">
                    <label className="step-one-modal-form-label-text" for="">Name your Fair</label>
                    <input type="text" className="form-control step-one-modal-form-input" />
                </div>

                <div className="pl-5 pt-1 pb-1 pr-5 mb-3 modal-step-one-second-row-col-first-form-con">
                    <label className="step-one-modal-form-label-text" for="">Select Fair Category</label>
                   <h6 className="step-one-modal-form-input-select-fair-category">Ok</h6>
                    <select name="" className="form-control custom-select step-one-modal-form-input">
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
                <a href="fair-step-two.html" className="btn btn-success btn-block">Proceed</a>
            </div>

            <div className="col-lg-2 col-xl-2 col-md-2">
                <button className="btn btn-outline-success btn-block">Cancel</button>
            </div>
        </div>

	</div>

  </>
                                                     
      )
  }
}

export default Fairone;