import React, { Component } from "react";
import HomeHeader from "../component/HomeHeader";
// import Footer from "../component/Footer";
import RowOne from "../component/RowOne";
import RowTwo from "../component/RowTwo";
import RowThree from "../component/RowThree";
import RowFour from "../component/RowFour";
import HomeFooter from "../component/HomeFooter";

class Home extends Component {
  render() {
    return (
      <>
        <HomeHeader />
        <RowOne />
        {/* <Footer /> */}
        <RowTwo />
        <RowThree />
        <RowFour />
        <HomeFooter />
      </>
    );
  }
}

export default Home;
