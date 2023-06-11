import React from "react";
import { Link } from "react-router-dom";
import Icons from "./Icons";

const ServicesItem = (props) => {
    return (
        <div className="services__item">
            <Link className="services__link" to={`/services/${props.service.id}`}>
                <h2 className="services__title">{props.service.title}</h2>
                <div className="services__text">{props.service.text}</div>
                <div className="services__footer">
                    <Icons icon={{ id: `${props.service.icon}`, nameClass: 'services__icon' }} />
                </div>
            </Link>
        </div>
    )
}

export default ServicesItem;