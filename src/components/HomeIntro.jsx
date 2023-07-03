import React from "react";
import MyButton from "./UI/button/MyButton";

const HomeIntro = ({intro}) => {
    return (
        <div className="intro intro--home">
            <img className="intro__home-img" src={intro.image} alt="" />
            <div className="container">
                <div className="intro__inner intro__inner--home">
                    <h1 className="intro__title intro__title--home">{intro.title}</h1>
                    <div className="intro__text">{intro.text}</div>
                    <MyButton type="button">Заказать звонок</MyButton>
                </div>
            </div>
        </div>
    )
}

export default HomeIntro;