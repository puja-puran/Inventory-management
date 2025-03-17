import React from "react";

import Sidebar from "../component/Sidebar/Sidebar";
import Product from "../Product/Product";
import Header from "../component/Header/Header";

const LayoutProducts=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            <Product className="Product" />
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutProducts;