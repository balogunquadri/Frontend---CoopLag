import React, { Component } from "react";
import DashboardHead from "../component/DashboardHead";
import DashboardPage from "../component/DashboardPage";
// import DashboardModal from "../component/DashboardModal";
// import Footer from "../component/Footer";

class Dashboard extends Component {
  render() {
    return (
      <>
        <DashboardHead />
        <DashboardPage />
        {/* <DashboardModal /> */}
      </>
    );
  }
}

export default Dashboard;
