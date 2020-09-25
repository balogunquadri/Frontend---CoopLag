import React, { Component } from "react";
// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import Background from "../img/anon.png";

class Fairfour extends Component {
  render() {
    return (
      <>
       <div className="container pt-4">
		<div className="m-2">
			<h4>Step 4</h4>
			 <span id="sub-step-four" className="modal-step-one-sub-text">Payment Set up</span>
		</div>
		
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
                <button id="preview" className="btn btn-success btn-block">Preview</button>
            </div>

            <div className="col-lg-2 col-xl-2 col-md-2">
                <a href="fair-step-three.html" id="goBackToStepThree" className="btn btn-outline-success btn-block">Back</a>
            </div>
        </div>

		

	</div>
      </>
    );
  }
}

export default Fairfour;
