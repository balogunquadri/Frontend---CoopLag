import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

class Vendor extends Component {
  render() {
      return (
          <>
              <Header />
              
    <div className="container-fluid">
                  <div className="row" style={{ backgroundImage: "url('assasin09.jpg')", paddingBottom: '20px' }} />
            <div className="col-lg-8 col-xl-8 col-md-8">

            </div>
                  <div className="col-lg-4 col-xl-4 col-md-4 pt-4" style={{ paddingRight: '100px' }}>
                      <div className="row" style={{ backgroundColor: 'white', borderRadius: '5px' }}>
                    <div className="col-lg-12 col-xl-12 pt-3">
                              <h2 className="text-muted text-center"><span style={{ fontWeight: 'bold' }} className="">Vendor's</span> Shop</h2>
                    </div>
                    <div className="col-lg-12 col-xl-12 text-center">
                              <button id="visitors-btn" className="btn btn-outline-secondary" style={{ borderRadius: '20px 0px 0px 20px', padding: '5px 40px 5px 40px', marginRight: '-5px' }}>vistors</button>
                              <button id="shop-btn" className="btn bg-secondary text-white" style={{ borderRadius: '0px 20px 20px 0px', padding: '5px 40px 5px 40px' }}>shop</button>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 mt-3 mb-4">
                              <img src="assasin09.jpg" alt="" style={{ borderRadius: '10px' }} />
                              <div style={{ width: '100%', height: '200px', borderRadius: '10px' }} className=' bg-light' >
                            <h4 className="text-center text-muted pt-4">AD.....Slider</h4>
                       </div>
                    </div>

                    <div className="col-xl-12 col-lg-12 col-md-12">
                              <h4 className="text-muted text-center" style={{ fontWeight: 'bold' }}>vistors</h4>
                              <hr style={{ margin: '5px 0px' }} />

                        <div className="row">
                                  <div className="col-lg-3 col-xl-3 col-md-3 text-center" style={{ paddingBottom: '50px' }}>
                                      <span className="fa fa-user-circle p-2 users-dummy-icon" style={{ fontSize: '30px' }}></span>
                                      <span className="fa fa-folder" style={{ marginRight: '10px', fontSize: '15px', cursor: 'pointer' }}></span>
                                      <span className="fa fa-exclamation-circle" style={{ fontSize: '15px', cursor: 'pointer' }}></span>
                            </div>
                            <div className="col-lg-3 col-xl-3 col-md-3 text-center">
                                      <span className="fa fa-user-circle p-2 users-dummy-icon" style={{ fontSize: '30px' }}></span>
                                      <span className="fa fa-folder" style={{ marginRight: '10px', fontSize: '15px', cursor: 'pointer' }}></span>
                                      <span className="fa fa-exclamation-circle" style={{ fontSize: '15px', cursor: 'pointer' }}></span>
                            </div>
                            <div className="col-lg-3 col-xl-3 col-md-3 text-center">
                                      <span className="fa fa-user-circle p-2 users-dummy-icon" style={{ fontSize: '30px' }}></span>
                                      <span className="fa fa-folder" style={{ marginRight: '10px', fontSize: '15px', cursor: 'pointer' }}></span>
                                      <span className="fa fa-exclamation-circle" style={{ fontSize: '15px', cursor: 'pointer' }}></span>
                            </div>
                            <div className="col-lg-3 col-xl-3 col-md-3 text-center">
                                      <span className="fa fa-user-circle p-2 users-dummy-icon" style={{ fontSize: '30px' }}></span>
                                      <span className="fa fa-folder" style={{ marginRight: '10px', fontSize: '15px', cursor: 'pointer' }}></span>
                                      <span className="fa fa-exclamation-circle" style={{ fontSize: '15px', cursor: 'pointer' }}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



              <Footer />
</>

    );
  }
}

export default Vendor;
