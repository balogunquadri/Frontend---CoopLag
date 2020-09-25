import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";

class Speaker extends Component {
  render() {
      return (
          <>
              <Header />
              <div class="container-fluid d-none d-md-block" style={{ marginBottom: "100px" }}>
                  <div class="row" style={{ paddingBottom: "20px" }}>
            <div class="col-lg-8 col-xl-8 col-md-7">

                <div class="row">
                    <div class="col-lg-12 col-xl-12 col-md-12">
                                  <button class="btn btn-outline-secondary" style={{ padding: "5px 15px 5px 15px" }}>Conference</button>
                                  <button class="btn btn-outline-secondary" style={{ padding: "5px 15px 5px 15px" }}>Panel Session</button>
                                  <button class="btn btn-outline-secondary" style={{ padding: "5px 15px 5px 15px" }}>Networking Room</button>
                    </div>
                              <div class="col-lg-12 col-xl-12 col-md-12 pt-3" style={{ display: "flex" }}>
                                  <div style={{ width: "85%", backgroundImage: "url('anon.png')", backgroundSize: "cover" }}>

                        </div>
                                  <div style={{ width: "1%" }}></div>
                                  <div style={{ width: "10%"}}>
                                      <li style={{ backgroundColor: "grey", borderRadius: "5px", listStyleType: "none", textAlign: "center", width: "40%" }}><span class="fa fa-sort-asc" style={{ color: "white", fontSize: "25px" }}></span></li>

                                      <ul style={{ margin: "0px", padding: "0px", listStyleType: "none", backgroundColor: "white", width: "40%" }}>	
                                          <img src="godofwar54.jpg" alt="" class="rounded-circle" style={{ height: "30px", width: "30px", marginLeft: "3px", marginBottom: "2px", marginTop: "2px" }}/>
                                          <img src="godofwar54.jpg" alt="" class="rounded-circle" style={{ height: "30px", width: "30px", marginLeft: "3px", marginBottom: "2px" }}/>
                                          <img src="godofwar54.jpg" alt="" class="rounded-circle" style={{ height: "30px", width: "30px", marginLeft: "3px", marginBottom: "2px" }}/>
                                              <img src="godofwar54.jpg" alt="" class="rounded-circle" style={{ height: "30px", width: "30px", marginLeft: "3px", marginBottom: "2px", marginTop: "2px" }}/>
                                
                            </ul>

                                          <li style={{ backgroundColor: "grey", borderRadius: "5px", listStyleType: "none", textAlign: "center", width: "40%" }}><span class="fa fa-sort-desc" style={{ color: "white", fontSize: "25px" }}></span></li>
                                          <li style={{ width: "45%", display: "block", textAlign: "center", marginTop: "10px" }}><span class="fa fa-eye" style={{ fontSize: "25px" }}></span><br /><span>1000</span></li>
                                              <li style={{ width: "45%", display: "block", textAlign: "center", marginTop: "10px" }}><span class="fa fa-sign-language" style={{fontSize: "25px"}}></span><br /><span>670</span></li>
                                          <li style={{ width: "45%", display: "block", textAlign: "center", marginTop: "10px" }}><span class="fa fa-commenting-o" style={{ fontSize: "25px" }}></span><br /><span>68</span></li>
                        </div>
                    </div>

                              <div class="col-lg-12 col-xl-12 col-md-12 pt-3" style={{ display: "flex" }}>
                        <div>
                                          <h6 style={{ marginLeft: "50px" }}>Ask Question<span class="fa fa-toggle-on" style={{ marginLeft: "20px" }}></span></h6> 
                        </div>
                        <div>
                                          <h6 style={{ marginLeft: "50px" }}>Clap <span class="fa fa-sign-language" style={{ marginLeft: "20px" }}></span></h6>
                        </div>
                        <div>
                                          <h6 style={{ marginLeft: "50px" }}>Audio<span class="fa fa-toggle-on" style={{ marginLeft: "20px" }}></span></h6>
                        </div>
                    </div>

                </div>

            </div>

            <div class="col-lg-4 col-xl-4 col-md-5 pt-4 d-none d-md-block">

                              <div style={{ height: "490px", overflow: "auto", backgroundColor: "white", borderRadius: "5px", padding: "20px" }}>

                                  <div class="row" style={{ backgroundColor: "white", borderRadius: "5px", marginRight: "10px" }}>
                        <div class="col-lg-12 col-xl-12 col-md-12 pt-3">
                                          <h4 class="text-muted text-center"><span style={{ fontWeight: "bold" }} class="">Events Schedule</span></h4>
                        </div>
                        <div class="col-lg-12 col-xl-12 col-md-12 col-sm-6 col-8 text-center">
                                          <a href="events.html"><button id="events-btn" class="btn btn-outline-secondary" style={{ borderRadius: "20px 0px 0px 20px", marginRight: "-5px", padding: "5px 25px 5px 25px" }}>Events</button></a>
                                          <a href="schedule.html"><button id="schedule" class="btn btn-outline-secondary" style={{ borderRadius: "0px", marginRight: "-5px", padding: "5px 25px 5px 25px", borderLeft: "0px" }}>Schedule</button></a>
                                          <a href="speaker.html"><button id="speakers-btn" class="btn bg-secondary text-white" style={{ borderRadius: "0px 20px 20px 0px", padding: "5px 25px 5px 25px" }}>Speakers</button></a>
                        </div>


                        <div class="col-xl-12 col-lg-12 col-md-12">

                            <div class="row mt-4 mb-4">
                                <div class="col-lg-12 col-xl-12 col-md-12">
                                    <div class="row">
                                        <div class="col-lg-2 col-xl-2 col-md-2">
                                                          <img src="godofwar54.jpg" alt="" class="rounded-circle" style={{ height: "30px", width: "30px", float: "left" }}/>
                                        </div>
                                        <div class="col-xl-10 col-lg-10 col-md-10">
                                                          <h5 class="text-muted" style={{ margin: "0px", fontSize: "20px", fontWeight: "bold" }}>Charles Avis</h5>
                                                          <h6 class="text-primary" style={{ margin: "0px", fontSize: "13px" }}>Speaker</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-4 mb-4">
                                <div class="col-lg-12 col-xl-12 col-md-12">
                                    <div class="row">
                                        <div class="col-lg-2 col-xl-2 col-md-2">
                                                          <img src="godofwar54.jpg" alt="" class="rounded-circle" style={{ height: "30px", width: "30px", float: "left" }}/>
                                        </div>
                                        <div class="col-xl-10 col-lg-10 col-md-10">
                                                          <h5 class="text-muted" style={{ margin: "0px", fontSize: "20px", fontWeight: "bold" }}>Charles Avis</h5>
                                                          <h6 class="text-primary" style={{ margin: "0px", fontSize: "13px" }}>Speaker</h6>
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

export default Speaker;
