import React from "react";
import { IAbout } from "../types/IAbout";
import Icons from "./Icons";

interface PromoItemProps {
    promo: IAbout;
}

const PromoItem = ({ promo }: PromoItemProps): JSX.Element => {
    return (
        <div className="about__item about__item--promo">
            <Icons icon={{ id: `${promo.icon}`, nameClass: 'about__icon about__icon--promo' }} />
            <div className="about__content about__content--promo">
                <h2 className="about__title">{promo.title}</h2>
                <div className="about__text">{promo.text}</div>
            </div>
        </div>
    )
}

export default PromoItem;