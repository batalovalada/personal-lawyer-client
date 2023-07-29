import React from "react";
import {Header} from "../../widgets/Header";
import {Footer} from "../../widgets/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="page-full">
            <Header/>

            <Outlet/>

            <Footer/>
        </div>
    )
}

export default Layout;