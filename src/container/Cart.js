import React, { Component } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
// import Background from "../img/anon.png";

class Cart extends Component {
  render() {
      return (
          
        
    
          <>
              <Header />
          <div className="container-fluid d-none d-md-block" style={{ marginBottom: '50px' }}>
              <div className="row" style={{ paddingBottom: '0px' }}>
                  <div className="col-lg-1 col-xl-1 col-md-1"> </div>
         
    
              <div className="col-lg-7 col-xl-7 col-md-6 p-3 scroll" style={{
                  backgroundColor: 'white', borderRadius: '10px', overflow: 'auto', height: '500px'
              }}>
                    <div className="row">
                      <div className="col-lg-12 col-xl-12 col-md-12" style={{ borderBottom: '1px solid cyan' }}>  
                            <div className="row">
                                <div className="col-lg-3 col-xl-3 col-md-3" style={{paddinRight: '0px' }}>
                                  <img src="1.jpg" alt="" style={{ width: '100%', height: '150px' }} />
                                </div>
                                <div className="col-lg-6 col-xl-6 col-md-6 pt-4">
                                    <h4 className="text-muted">HD laptop with ultra display unit, </h4>
                                  <h6 className="text-primary" style={{ fontWeight: 'bold' }}>N56,900</h6>
                                </div>
                                <div className="col-lg-3 col-xl-3 col-md-3 pt-4 text-center">
                                    <h6>Quantity</h6>
                                  <span className="btn btn-primary fa fa-plus" style={{ padding: '3px', marginRight: '-5px', borderRadius: '5px 0px 0px 5px',display: 'inline-block', marginTop: '-5px' }}></span>
                                  <input type="text" style={{ width: '30px', height: '23px', padding: '2px' }} />
                                      <span className="btn btn-primary fa fa-minus" style={{ padding: '3px', marginLeft: '-5px', borderRadius: '0px 5px 5px 0px', display: 'inline-block', marginTop: '-5px' }}></span>
                                      <h6 className="p-2"><span className="text-primary" style={{ fontWeight: 'bold' }}>Discount</span> <span style={{padding: '2px', border: '1px solid lightskyblue', borderRadius: '5px', fontSize: '12px'}}>25%</span></h6>
                                </div>
                            </div>
                  </div>
                  
    
    
                          <div className="col-lg-12 col-xl-12 col-md-12" style={{ borderBottom: '1px solid cyan' }}>  
                            <div className="row">
                                  <div className="col-lg-3 col-xl-3 col-md-3" style={{ paddingRight: '0px' }}>
                                      <img src="1.jpg" alt="" style={{ width: '100%', height: '150px' }} />
                                </div>
                                <div className="col-lg-6 col-xl-6 col-md-6 pt-4">
                                    <h4 className="text-muted">HD laptop with ultra display unit, </h4>
                                          <h6 className="text-primary" style={{ fontWeight: 'bold' }}>N56,900</h6>
                                </div>
                                <div className="col-lg-3 col-xl-3 col-md-3 pt-4 text-center">
                                    <h6>Quantity</h6>
                                          <span className="btn btn-primary fa fa-plus" style={{ padding: '3px', marginRight: '-5px', borderRadius: '5px 0px 0px 5px', display: 'inline-block', marginTop: '-5px' }}></span>
                                          <input type="text" style={{ width: '30px', height: '23px', padding: '2px' }} />
                                              <span className="btn btn-primary fa fa-minus" style={{ padding: '3px', marginLeft: '-5px', borderRadius: '0px 5px 5px 0px', display: 'inline-block', marginTop: '-5px' }}></span>
                                              <h6 className="p-2"><span className="text-primary" style={{ fontWeight: 'bold' }}>Discount</span> <span style={{ padding: '2px', border: '1px solid lightskyblue', borderRadius: '5px', fontSize: '12px' }}>25%</span></h6>
                                </div>
                            </div>
                        </div>
    
    
                        
                              <div className="col-lg-12 col-xl-12 col-md-12" style={{ borderBottom: '1px solid cyan' }}>  
                            <div className="row">
                                      <div className="col-lg-3 col-xl-3 col-md-3" style={{ paddingRight: '0px' }}>
                                          <img src="1.jpg" alt="" style={{ width: '100%', height: '150px' }} />
                                </div>
                                <div className="col-lg-6 col-xl-6 col-md-6 pt-4">
                                    <h4 className="text-muted">HD laptop with ultra display unit, </h4>
                                              <h6 className="text-primary" style={{ fontWeight: 'bold' }}>N56,900</h6>
                                </div>
                                <div className="col-lg-3 col-xl-3 col-md-3 pt-4 text-center">
                                    <h6>Quantity</h6>
                                          <span className="btn btn-primary fa fa-plus" style={{ padding: '3px', marginRight: '-5px', borderRadius: '5px 0px 0px 5px', display: 'inline-block', marginTop: '-5px' }}></span>
                                          <input type="text" style={{ width: '30px', height: '23px', padding: '2px' }} />
                                          <span className="btn btn-primary fa fa-minus" style={{ padding: '3px', marginLeft: '-5px', borderRadius: '0px 5px 5px 0px', display: 'inline-block', marginTop: '-5px' }}></span>
                                          <h6 className="p-2"><span className="text-primary" style={{ fontWeight: 'bold' }}>Discount</span> <span style={{ padding: '2px', border: '1px solid lightskyblue', borderRadius: '5px', fontSize: '12px' }}>25%</span></h6>
                                </div>
                            </div>
                        </div>
                        
    
    
                        
                              <div className="col-lg-12 col-xl-12 col-md-12" style={{ borderBottom: '1px solid cyan' }}>  
                            <div className="row">
                                      <div className="col-lg-3 col-xl-3 col-md-3" style={{ paddingRight: '0px' }}>
                                              <img src="1.jpg" alt="" style={{ width: '100%', height: '150px' }} />
                                </div>
                                <div className="col-lg-6 col-xl-6 col-md-6 pt-4">
                                    <h4 className="text-muted">HD laptop with ultra display unit, </h4>
                                                  <h6 className="text-primary" style={{ fontWeight: 'bold' }}>N56,900</h6>
                                </div>
                                <div className="col-lg-3 col-xl-3 col-md-3 pt-4 text-center">
                                    <h6>Quantity</h6>
                                                  <span className="btn btn-primary fa fa-plus" style={{ padding: '3px', marginRight: '-5px', borderRadius: '5px 0px 0px 5px', display: 'inline-block', marginTop: '-5px' }}></span>
                                                  <input type="text" style={{ width: '30px', height: '23px', padding: '2px' }} />
                                                      <span className="btn btn-primary fa fa-minus" style={{ padding: '3px', marginLeft: '-5px', borderRadius: '0px 5px 5px 0px', display: 'inline-block', marginTop: '-5px' }}></span>
                                                      <h6 className="p-2"><span className="text-primary" style={{ fontWeight: 'bold' }}>Discount</span> <span style={{ padding: '2px', border: '1px solid lightskyblue', borderRadius: '5px', fontSize: '12px' }}>25%</span></h6>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
    
                <div className="col-lg-3 col-xl-3 col-md-3 pt-2 d-none d-md-block">
                      <div className="scroll" style={{ height: '490px', float: 'right', backgroundColor: 'white', borderRadius: '5px', padding: '20px' }}>
    
                        <div className="row">
                            <div className="col-lg-12 col-xl-12 col-md-12 pt-2">
                                  <h5 className="p-2"><span className="text-primary" style={{ fontSize: '15px', fontWeight: 'bold' }}>Amount</span> <span className="text-muted" style={{ float: 'right', fontWeight: 'bold' }}>N3,000</span></h5>
                                  <h5 className="p-2"><span className="text-primary" style={{ fontSize: '15px', fontWeight: 'bold' }}>Discount</span> <span className="text-muted" style={{ float: 'right', fontWeight: 'bold' }}>N500</span></h5>
                                  <h5 className="p-2"><span className="text-primary" style={{ fontSize: '15px', fontWeight: 'bold' }}>Vat(6.6%)</span> <span className="text-muted" style={{ float: 'right', fontWeight: 'bold' }}>N34</span></h5>
                                <hr />
                                  <h5 className="p-2"><span className="text-primary" style={{ fontSize: '15px', fontWeight: 'bold' }}>Total</span> <span className="text-muted" style={{ float: 'right', fontWeight: 'bold' }}>N98,000</span></h5>
                                <hr />
                            </div>
                            <div className="col-lg-12 col-xl-12 col-md-12 pt-2 text-center">
                                                  <a href="proceed-to-payment.html"><button className="btn btn-primary" style={{ fontWeight: 'bold' }}>Proceed to Payment</button></a>
                            </div>
                            
                        </div>
                        </div>
    
                    </div>
                
                <div className="col-lg-1 col-xl-1 col-md-0"></div>
            </div>
    
              </div>
              <Footer />
    </>
                                                     
      )
  }
}

export default Cart;