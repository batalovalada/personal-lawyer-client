import React from "react";
import { Link } from "react-router-dom";
import { IService } from "../../../../shared/types/IService";
import Icon from "../../../../shared/UI/icon/Icon";

interface ServicesItemProps {
    service: IService;
}

export const ServicesItem = ({ service }: ServicesItemProps): JSX.Element => {
    return (
        <div className="services__item">
            <Link className="services__link" to={`/services/${service.id}`}>
                <h2 className="services__title">{service.title}</h2>
                <div className="services__text">{service.text}</div>
                <div className="services__footer">
                    <Icon icon={{ id: `${service.icon}`, nameClass: 'services__icon' }} />
                </div>
            </Link>
        </div>
    )
}