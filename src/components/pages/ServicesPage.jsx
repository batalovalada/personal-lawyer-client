import React from "react";
import Intro from "../Intro";
import Services from "../Services";
import ScrollToTop from "../../scrollToTop";

const ServicesPage = () => {
    ScrollToTop();
    return (
        <div className="page">
            <Intro title='Услуги' />
            <Services/>
        </div>
    )
}

export default ServicesPage;