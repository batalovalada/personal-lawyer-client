import React from "react";
import Icons from "./Icons";

const ServicesItem = (props) => {
    return (
        <div className="services__item">
            <a className="services__link" href={props.service.href}>
                <h2 className="services__title">{props.service.title}</h2>
                <div className="services__text">{props.service.text}</div>
                <div className="services__footer">
                    <Icons icon={{ id: `${props.service.icon}`, nameClass: 'services__icon' }} />
                </div>
            </a>
        </div>
    )
}

export default ServicesItem;