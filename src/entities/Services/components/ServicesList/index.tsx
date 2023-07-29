import React from "react";
import { IService } from "../../../../shared/types/IService";
import {ServicesItem} from '../..';

interface ServicesListProps {
    suptitle: string;
    services: IService[];
}

export const ServicesList = ({ services, suptitle }: ServicesListProps): JSX.Element => {
    return (
        <div className="services__inner">
            <h1 className="services__suptitle">{suptitle}</h1>
            <div className="services__content">
                {services.map(service => <ServicesItem service={service} key={service.id} />)}
            </div>
        </div>
    )
}
