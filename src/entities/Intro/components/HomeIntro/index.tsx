import React from "react";
import { IHomeIntro } from "../../../../shared/types/IHomeIntro";
import MyButton from "../../../../shared/UI/button/MyButton";

interface HomeIntroProps {
    intro: IHomeIntro;
    setModal: (modal: boolean) => void;
}

export const HomeIntro = ({ intro, setModal }: HomeIntroProps): JSX.Element => {

    return (
        <div className="intro intro--home">
            <img className="intro__home-img" src={intro.image} alt={intro.title} />
            <div className="container">
                <div className="intro__inner intro__inner--home">
                    <h1 className="intro__title intro__title--home">{intro.title}</h1>
                    <div className="intro__text">{intro.text}</div>
                    <MyButton type="button" onClick={() => setModal(true)}>Заказать звонок</MyButton>
                </div>
            </div>
        </div>
    )
}