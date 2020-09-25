import React, { Component } from "react";
import Background from "../img/anon.png";
import Header from "../component/Header";
import Footer from "../component/Footer";
class Index extends Component {
  render() {
      return (
          
          <>
              <Header />
             
              <div className="container-fluid d-none d-md-block" style={{ marginBottom: "50px" }}>
        <div className="row" style={{ backgroundImage: "url(" + Background + ")", backgroundSize: "cover", paddingBottom: "0px", height: "600px"}}>
            <div className="col-lg-8 col-xl-8 col-md-6">

            </div>
            <div className="col-lg-4 col-xl-4 col-md-6 pt-4 d-none d-md-block">
                          <div className="scroll" style={{ height: "490px", overflow: "auto", backgroundColor: "white", borderRadius: "5px", padding: "20px" }}>

                    <div className="row">
                        <div className="col-lg-12 col-xl-12 col-md-12 pt-3">
                                      <h4 className="text-muted text-center"><span style={{ fontWeight: "bold" }} className="">Vendor's</span> Shop</h4>
                        </div>
                        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-6 col-8 text-center">
                                      <a href="index.html"><button id="visitors-btn" className="btn bg-secondary text-white" style={{ borderRadius: "20px 0px 0px 20px", marginRight: "-5px", padding: "5px 25px 5px 25px" }}>vistors</button></a>
                                      <a href="shop.html"><button id="shop-btn" className="btn btn-outline-secondary" style={{ borderRadius: "0px 20px 20px 0px", padding: "5px 25px 5px 25px" }}>shop</button></a>
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
                                                  <img src="preview_7021774.jpg" alt="Los Angeles" style={{ height: "200px", borderRadius: "10px", width: "100%" }} />
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
                                          <h4 className="text-muted text-center" style={{ fontWeight: "bold" }}>vistors</h4>
                                          <hr style={{ margin: "5px 0px" }} />

                            <div className="row mt-4">
                                          <div className="col-lg-3 col-xl-3 col-md-3" style={{ paddingBottom: "50px", paddingLeft: "25px" }}>
                                                      <img src="mylager.jpg" alt="" className="rounded-circle" style={{ height: "50px", width: "50px", display: "block" }}/>
                                                      <span className="fa fa-folder" style={{ paddingRight: "20px", fontSize: "15px", cursor: "pointer" }}></span>
                                                      <span className="fa fa-exclamation-circle" style={{ fontSize: "15px", cursor: "pointer" }}></span>
                                </div>
                                <div className="col-lg-3 col-xl-3 col-md-3 text-center">
                                                      <img src="mylager.jpg" alt="" className="rounded-circle" style={{ height: "50px", width: "50px", display: "block" }} />
                                                      <span className="fa fa-folder" style={{
                                                          paddingRight: "20px", fontSize: "15px", cursor: "pointer", marginLeft: "-15px"
                                                      }}></span>
                                                      <span className="fa fa-exclamation-circle" style={{ fontSize: "15px", cursor: "pointer" }}></span>
                                </div>
                                <div className="col-lg-3 col-xl-3 col-md-3 text-center">
                                                      <img src="mylager.jpg" alt="" className="rounded-circle" style={{ height: "50px", width: "50px", display: "block" }}/>
                                                      <span className="fa fa-folder" style={{ paddingRight: "20px", fontSize: "15px", cursor: "pointer", marginLeft: "-15px" }}></span>
                                                      <span className="fa fa-exclamation-circle" style={{ fontSize: "15px", cursor: "pointer" }}></span>
                                </div>
                                <div className="col-lg-3 col-xl-3 col-md-3 text-center">
                                                      <img src="mylager.jpg" alt="" className="rounded-circle" style={{ height: "50px", width: "50px", display: "block" }} />
                                                      <span className="fa fa-folder" style={{ paddingRight: "20px", fontSize: "15px", cursor: "pointer", marginLeft: "-15px" }}></span>
                                                      <span className="fa fa-exclamation-circle" style={{ fontSize: "15px", cursor: "pointer" }}></span>
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

export default Index;