import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Background from "../img/anon.png";
import Header from "../component/Header";
import Footer from "../component/Footer";

class Schedule extends Component {
  render() {
      return (
        
       
          <>
              <Header />
              <div className="container-fluid d-none d-md-block" style={{ marginBottom: "100px" }} >
                  <div className="row" style={{ paddingBottom: "20px" }}>
            <div className="col-lg-8 col-xl-8 col-md-7">
                <div className="row">
      <div className="col-lg-12 col-xl-12 col-md-12">
                  <button className="btn btn-outline-secondary" style={{ padding: "5px 20px 5px 20px" }}>Conference</button>
                  <button className="btn btn-outline-secondary" style={{ padding: "5px 20px 5px 20px" }}>Panel Session</button>
                  <button className="btn btn-outline-secondary" style={{ padding: "5px 20px 5px 20px" }}>Networking Room</button>
  </div>
              <div className="col-lg-12 col-xl-12 col-md-12 pt-3" style={{ display: "flex" }} >
      <div style={{width: "85%", backgroundImage: "url(" + Background + ")", backgroundSize: "cover"}}>

      </div>
                  <div style={{ width: "1%" }}></div>
                  <div style={{ width: "10%" }}>
                      <li style={{ backgroundColor: "grey", borderRadius: "5px", listStyleType: "none", textAlign: "center", width: "40%" }}><span className="fa fa-sort-asc" style={{ color: "white", fontSize: "25px" }}></span></li>
                      
                      <ul style={{ margin: "0px", padding: "0px", listStyleType: "none", backgroundColor: "white", width: "40%" }}>	
                          <img src="godofwar54.jpg" alt="" className="rounded-circle" style={{ height: "30px", width: "30px", marginLeft: "3px", marginBottom: "2px", marginTop: "2px" }}/>
                          <img src="godofwar54.jpg" alt="" className="rounded-circle" style={{ height: "30px", width: "30px", marginLeft: "3px", marginBottom: "2px" }}/>
                  <img src="godofwar54.jpg" alt="" className="rounded-circle" style={{ height: "30px", width: "30px", marginLeft: "3px", marginBottom: "2px" }}/>
              <img src="godofwar54.jpg" alt="" className="rounded-circle" style={{ height: "30px", width: "30px", marginLeft: "3px", marginBottom: "2px", marginTop: "2px" }}/>
              
          </ul>

              <li style={{ backgroundColor: "grey", borderRadius: "5px", liststyletype: "none", textAlign: "center", width: "40%" }}><span className="fa fa-sort-desc" style={{ color: "white", fontSize: "25px" }}></span></li>
              <li style={{ width: "45%", display: "block", textAlign: "center", marginTop: "10px" }}><span className="fa fa-eye" style={{ fontSize: "25px" }}></span><br /><span>1000</span></li>
                  <li style={{ width: "45%", display: "block", textAlign: "center", marginTop: "10px" }}><span className="fa fa-sign-language" style={{ fontSize: "25px" }}></span><br /><span>670</span></li>
                  <li style={{ width: "45%", display: "block", textAlign: "center", marginTop: "10px" }}><span className="fa fa-commenting-o" style={{ fontSize: "25px" }}></span><br /><span>68</span></li>
     
                 
      </div>
  </div>

                      <div className="col-lg-12 col-xl-12 col-md-12 pt-3" style={{ display: "flex" }}> 
      <div>
                              <h6 style={{ marginLeft: "50px" }}>Ask Question<span className="fa fa-toggle-on" style={{ marginLeft: "20px" }}></span></h6> 
      </div>
      <div>
                              <h6 style={{ marginLeft: "50px" }}>Clap <span className="fa fa-sign-language" style={{ marginLeft: "20px" }}></span></h6>
      </div>
      <div>
                              <h6 style={{ marginLeft: "50px" }}>Audio<span className="fa fa-toggle-on" style={{ marginLeft: "20px" }}></span></h6>
      </div>
              </div>
              </div>

</div>




<div className="col-lg-4 col-xl-4 col-md-5 pt-3 d-none d-md-block">

                  <div style={{ height: "490px", overflow: "auto", backgroundColor: "white", borderRadius: "5px", padding: "20px" }}>

                  <div className="col-lg-4 col-xl-4 col-md-5 pt-3 d-none d-md-block">

                          <div style={{ height: "490px", overflow: "auto", backgroundColor: "white", borderRadius: "5px", padding: "20px" }}>

    <div className="row">
        <div className="col-lg-12 col-xl-12 col-md-12 pt-3">
                                      <h4 className="text-muted text-center"><span style={{ fontWeight: "bold" }} className="">Event Schedule</span></h4>
        </div>
        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-6 col-8 text-center">
                                      <a href="events.html"><button id="events-btn" className="btn btn-outline-secondary" style={{ borderRadius: "20px 0px 0px 20px", marginRight: "-5px", padding: "5px 25px 5px 25px" }}>Events</button></a>
                                      <a href="schedule.html"><button id="schedule" className="btn bg-secondary text-white" style={{ borderRadius: "0px", marginRight: "-5px", padding: "5px 25px 5px 25px" }}>Schedule</button></a>
                                      <a href="speaker.html"><button id="speakers-btn" className="btn btn-outline-secondary" style={{ borderRadius: "0px 20px 20px 0px", padding: "5px 25px 5px 25px" }}>Speakers</button></a>
        </div>
      <div className="col-xl-12 col-lg-12 col-md-12 mt-4">

          <div className="row mb-4">
                                          <div className="col-lg-8 col-xl-8 col-md-8" style={{ paddingRight: "0px" }}>
                                              <div style={{ borderTop: "2px solid cyan", borderBottom: "2px solid cyan" ,padding: "2px 10px" }}>
                                                  <h6 style={{ fontSize: "14px", margin: "1px 0px" }}><span style={{ fontWeight: "bold", paddingRight: "10px" }}>Topic:</span>The power of AI technology in oil gas</h6>
                                                  <img src="godofwar54.jpg" alt="" className="rounded-circle" style={{ height: "30px", width: "30px", float: "left" }}/>
                                                      <h6 style={{ margin: "0px", display: "inline", paddingLeft: "15px", fontSize: "14px" }}>Avis Charles</h6>
                                                      <h6 style={{ margin: "0px", paddingLeft: "40px", fontSize: "12px" }}>Speaker</h6>
                      
                                                      <button className="btn btn-outline-primary" style={{ borderRadius: "20px", padding: "0px 20px 0px 20px", marginLeft: "50px", fontSize: "12px" }}>Register</button>
                  </div>
              </div>
                                              <div className="col-lg-4 col-xl-4 col-md-4" style={{ paddingLeft: "0px" }}>
                                                  <div style={{ backgroundColor: "magenta", padding: "10px" }}>
                                                      <h2 className="text-center" style={{ fontWeight: "bolder", color: "white", margin: "0px" }}>18th</h2>
                                                      <h6 style={{ textAlign: "right", margin: "0px", color: "white", fontSize: "15px" }}>August</h6>
                                                      <h6 className="text-center" style={{ fontSize: "12px", color: "white", fontWeight: "bold", paddingBottom: "8px" }}>9:00AM</h6>
                  </div>       
              </div>
          </div>

          <div className="row">
                                              <div className="col-lg-8 col-xl-8 col-md-8" style={{ paddingRight: "0px" }}>
                                                  <div style={{ borderTop: "2px solid cyan", borderBottom: "2px solid cyan", padding: "2px 10px" }}>
                                                      <h6 style={{ fontSize: "14px", margin: "1px 0px" }}><span style={{ fontWeight: "bold", paddingRight: "10px" }}>Topic:</span>The power of AI technology in oil gas</h6>
                                                      <img src="godofwar54.jpg" alt="" className="rounded-circle" style={{ height: "30px", width: "30px", float: "left" }}/>
                                                      <h6 style={{ margin: "0px", display: "inline", paddingLeft: "15px", fontSize: "14px" }}>Avis Charles</h6>
                                                      <h6 style={{ margin: "0px", paddingLeft: "40px", fontSize: "12px" }}>Speaker</h6>
                      
                                    <button className="btn btn-outline-primary" style={{ borderRadius: "20px", padding: "0px 20px 0px 20px", marginLeft: "50px", fontSize: "12px" }} >Register</button>
                  </div>
              </div>
                                              <div className="col-lg-4 col-xl-4 col-md-4" style={{ paddingLeft: "0px" }}>
                                                  <div style={{ backgroundColor: "magenta", padding: "10px" }}>
                                                      <h2 className="text-center" style={{ fontWeight: "bolder", color: "white", margin: "0px" }}>18th</h2>
                                                      <h6 style={{ textAlign: "right", margin: "0px", color: "white", fontSize: "15px" }}>August</h6>
                      <h6 className="text-center" style={{fontSize: "12px", color: "white", fontWeight: "bold", paddingBottom: "8px" }}>9:00AM</h6>
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


     
    )
  }
}

export default Schedule;
















































