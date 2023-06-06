import React from "react";
import Icons from "./Icons";

const PromoItem = (props) => {
    return (
        <div className="promo__item">
            <div className="promo__preview">
                <Icons icon={{ id: `${props.promo.icon}`, nameClass: 'promo__icon' }}/>
                <h2 className="promo__title">{props.promo.title}</h2>
            </div>
            <div className="promo__text">{props.promo.text}</div>
        </div>
    )
}

export default PromoItem;