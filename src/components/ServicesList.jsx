import React from "react";
import ServicesItem from './ServicesItem';

const ServicesList = ({services}) => {
    return (
        <div className="services__inner">
            {services.map(service => <ServicesItem service={service} key={service.id}/>)}
        </div>
    )
}

export default ServicesList;