import React from "react";
import PromoItem from "./PromoItem";

const Promo = () => {
    const promoItems = [
        { id: 1, icon: 'about1', title: 'Личный адвокат', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?' },
        { id: 2, icon: 'about3', title: 'Корпоративное право', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?' },
        { id: 3, icon: 'about2', title: 'Составление договоров', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?' },
        { id: 4, icon: 'about4', title: 'Законопроектная работа', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?' }
    ]
    return (
        <div className="about">
            <div className="container">
                <div className="about__inner">
                    {promoItems.map(item => <PromoItem promo={item} key={item.id}/>)}
                </div>
            </div>
        </div>
    )
}

export default Promo;