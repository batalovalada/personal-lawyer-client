import React from "react";
import {Intro} from "../../entities/Intro";
import {Services} from "../../features/Services";
import {ScrollToTop} from "../lib/scroll";

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