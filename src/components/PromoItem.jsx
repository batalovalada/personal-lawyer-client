import React from "react";
import Icons from "./Icons";

const PromoItem = (props) => {
    return (
        <div className="about__item about__item--promo">
            <Icons icon={{ id: `${props.promo.icon}`, nameClass: 'about__icon about__icon--promo' }} />
            <div className="about__content about__content--promo">
                <h2 className="about__title">{props.promo.title}</h2>
                <div className="about__text">{props.promo.text}</div>
            </div>
        </div>
    )
}

export default PromoItem;