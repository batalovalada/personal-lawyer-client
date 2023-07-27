import React from "react";
import { Link } from "react-router-dom";
import { IService } from "../types/IService";
import Icons from "./Icons";

interface ServicesItemProps {
    service: IService;
}

const ServicesItem = ({ service }: ServicesItemProps): JSX.Element => {
    return (
        <div className="services__item">
            <Link className="services__link" to={`/services/${service.id}`}>
                <h2 className="services__title">{service.title}</h2>
                <div className="services__text">{service.text}</div>
                <div className="services__footer">
                    <Icons icon={{ id: `${service.icon}`, nameClass: 'services__icon' }} />
                </div>
            </Link>
        </div>
    )
}

export default ServicesItem;