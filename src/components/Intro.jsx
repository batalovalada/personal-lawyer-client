import React from 'react';

const Intro = (props) => {
    return (
        <div className="intro">
            <div className="container">
                <div className="intro__inner">
                    <h1 className="intro__title">{props.title}</h1>
                    <ul className="intro__list">
                        <li className="intro__item">
                            <a className="intro__link" href="#">Главная</a>
                        </li>
                        <li className="intro__item">{props.title}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Intro;