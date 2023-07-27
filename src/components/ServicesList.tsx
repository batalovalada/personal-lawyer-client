import React from "react";
import { IService } from "../types/IService";
import ServicesItem from './ServicesItem';

interface ServicesListProps {
    suptitle: string;
    services: IService[];
}

const ServicesList = ({ services, suptitle }: ServicesListProps): JSX.Element => {
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