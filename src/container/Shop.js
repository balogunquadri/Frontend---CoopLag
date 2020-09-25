import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

class Shop extends Component {
  render() {
      return (
        <>
        <Header />
     
    <div className="container-fluid d-none d-md-block">
            <div className="row" style={{ backgroundImage: "url('anon.png')", backgroundSize: "cover", paddingBottom: "0px", height: "600px" }}>
        
        <div className="col-lg-8 col-xl-8 col-md-6">

        </div>

        <div className="col-lg-4 col-xl-4 col-md-6 pt-3 d-none d-md-block side-menu-bar">   
                    <div className="scroll" style={{ overflow: "auto", height: "490px", backgroundColor: "white", borderRadius: "5px", padding: "20px" }}>
                <div className="row">

                    <div className="col-lg-12 col-xl-12 col-md-12 pt-2">
                                <h4 className="text-muted text-center"><span style={{ fontWeight: "bold" }} className="">Vendor's</span> Shop</h4>
                    </div>

                    <div className="col-lg-12 col-xl-12 col-md-12 col-sm-6 col-8 text-center">
                                <a href="index.html"><button className="btn btn-outline-secondary" style={{ borderRadius: "20px 0px 0px 20px", marginRight: "-5px", padding: "5px 25px 5px 25px" }}>vistors</button></a>
                                <a href="shop.html"><button className="btn bg-secondary text-white" style={{ borderRadius: "0px 20px 20px 0px", padding: "5px 25px 5px 25px" }}>shop</button></a>
                    </div>
                    

                
                    <div className="col-xl-12 col-lg-12 col-md-12 mt-3 mb-4">
                                <div id="demo" className="carousel slide" data-ride="carousel" style={{ height: "200px" }}>
                          
                            <ul className="carousel-indicators">
                                <li data-target="#demo" data-slide-to="0" className="active"></li>
                                <li data-target="#demo" data-slide-to="1"></li>
                                <li data-target="#demo" data-slide-to="2"></li>
                            </ul>

                            
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                                  <img src="preview_7021774.jpg" alt="Los Angeles" style={{ height: "200px", borderRadius: "10px", width: "100%" }}/>
                                </div>
                                <div className="carousel-item">
                                            <img src="hgfd.jpg" alt="Chicago" style={{ height: "200px", borderRadius: "10px", width: "100%" }}/>
                                </div>
                                <div className="carousel-item">
                                                <img src="online-shopping-banner_82574-3393.jpg" alt="New York" style={{ height: "200px", borderRadius: "10px", width: "100%" }}/>
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
                                      <h5 className="text-muted" style={{ fontWeight: "bold" }}>Hot Deals</h5>
                                        <hr style={{ margin: "5px 0px" }}/>

                        <div className="row pb-2">
                            <div className="col-sm-6 col-6">
                                <div className="row">
                                    <div className="col-sm-12">
                                                      <img src="1.jpg" alt="" style={{ height: "150px", width: "100%", borderRadius: "10px 10px 0px 0px" }}/>
                                    </div>
                                    <div className="col-sm-12 col-12">
                                                        <div style={{ backgroundColor: "#ddffdd", padding: "10px", borderRadius: "0px 0px 10px 10px" }}>
                                            <h6>24'' Television</h6>
                                                            <span style={{ fontWeight: "bold" }}>434,000</span>
                                                            <span className="fa fa-exclamation-circle" style={{ paddingLeft: "20px" }}></span>
                                                            <span className="fa fa-cart-arrow-down" style={{ paddingLeft: "20px", fontSize: "20px" }}></span>
                                        </div>   
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-6">
                                <div className="row">
                                    <div className="col-sm-12">
                                                      <img src="1.jpg" alt="" style={{ height: "150px", width: "100%", borderRadius: "10px 10px 0px 0px" }}/>
                                    </div>
                                    <div className="col-sm-12 col-12">
                                                        <div style={{ backgroundColor: "#ddffdd", padding: "10px", borderRadius: "0px 0px 10px 10px" }}>
                                            <h6>24'' Television</h6>
                                                            <span style={{ fontWeight: "bold" }}>434,000</span>
                                                            <span className="fa fa-exclamation-circle" style={{ paddingLeft: "20px" }}></span>
                                                            <span className="fa fa-cart-arrow-down" style={{ paddingLeft: "20px", fontSize: "20px" }}></span>
                                        </div>   
                                    </div>
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
    );
  }
}

export default Shop;
