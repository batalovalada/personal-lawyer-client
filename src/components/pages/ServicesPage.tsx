import React from "react";
import Intro from "../Intro";
import Services from "../Services";
import {ScrollToTop} from "../../scroll";

const ServicesPage: React.FC = () => {
    ScrollToTop();
    return (
        <div className="page">
            <Intro title='Услуги' />
            <Services/>
        </div>
    )
}

export default ServicesPage;