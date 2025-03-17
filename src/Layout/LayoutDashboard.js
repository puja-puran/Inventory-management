import React from "react";

import Sidebar from "../component/Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import Header from "../component/Header/Header";

const LayoutDashboard=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            <Dashboard className="dashboard" />
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutDashboard