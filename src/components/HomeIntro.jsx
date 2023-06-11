import React from "react";
import MyButton from "./UI/button/MyButton";

const HomeIntro = ({title, text}) => {
    return (
        <div className="intro intro--home">
            <div className="container">
                <div className="intro__inner intro__inner--home">
                    <h1 className="intro__title intro__title--home">{title}</h1>
                    <div className="intro__text">{text}</div>
                    <MyButton type="button">Заказать звонок</MyButton>
                </div>
            </div>
        </div>
    )
}

export default HomeIntro;