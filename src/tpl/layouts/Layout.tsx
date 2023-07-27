import React from "react";
import Header from "../../components/UI/header/Header";
import Footer from "../../components/UI/footer/Footer";
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