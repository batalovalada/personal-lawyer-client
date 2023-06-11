import React from "react";
import ServicesItem from './ServicesItem';

const ServicesList = ({services, suptitle}) => {
    return (
        <div className="services__inner">
            <h1 className="services__suptitle">{suptitle}</h1>
            <div className="services__content">
                {services.map(service => <ServicesItem service={service} key={service.id} />)}
            </div>
        </div>
    )
}

export default ServicesList;