import React from "react";
import PromoItem from "./PromoItem";

const Promo = () => {
    return (
        <div className="promo">
            <div className="container">
                <div className="promo__inner">
                    <PromoItem promo={{ icon: 'about1', title: 'Promo title', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?'}}/>
                    <PromoItem promo={{ icon: 'about3', title: 'Promo title', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?' }} />
                    <PromoItem promo={{ icon: 'about2', title: 'Promo title', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?' }} />
                    <PromoItem promo={{ icon: 'about4', title: 'Promo title', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque repellat tempore?' }} />
                </div>
            </div>
        </div>
    )
}

export default Promo;