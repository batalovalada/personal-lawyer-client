import React from "react";
import { IAbout } from "../../../../shared/types/IAbout";
import { promoItems } from "../../consts/promoItems";
import {PromoItem} from "../..";

export const PromoList = (): JSX.Element => {
    return (
        <div className="about">
            <div className="container">
                <div className="about__inner">
                    {promoItems.map((item: IAbout) => <PromoItem promo={item} key={item.id}/>)}
                </div>
            </div>
        </div>
    )
}
