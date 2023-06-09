import React from "react";
import Intro from "../components/Intro";
import Services from "../components/Services";

const ServicesPage = () => {
    return (
        <div className="page">
            <Intro title={'Услуги'} />
            <Services/>
        </div>
    )
}

export default ServicesPage;