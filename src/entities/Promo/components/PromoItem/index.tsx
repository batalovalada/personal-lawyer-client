import React from "react";
import { IAbout } from "../../../../shared/types/IAbout";
import Icon from "../../../../shared/UI/icon/Icon";

interface PromoItemProps {
    promo: IAbout;
}

export const PromoItem = ({ promo }: PromoItemProps): JSX.Element => {
    return (
        <div className="about__item about__item--promo">
            <Icon icon={{ id: `${promo.icon}`, nameClass: 'about__icon about__icon--promo' }} />
            <div className="about__content about__content--promo">
                <h2 className="about__title">{promo.title}</h2>
                <div className="about__text">{promo.text}</div>
            </div>
        </div>
    )
}