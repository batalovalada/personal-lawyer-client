import React from "react";
import Intro from "../Intro";
import Services from "../Services";

const ServicesPage = () => {
    return (
        <div className="page">
            <Intro title='Услуги' />
            <Services/>
        </div>
    )
}

export default ServicesPage;