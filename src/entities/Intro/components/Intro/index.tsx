import React from 'react';
import { Link } from 'react-router-dom';

interface IntroProps {
    title: string;
}

export const Intro = ({ title }: IntroProps): JSX.Element => {
    return (
        <div className="intro">
            <div className="container">
                <div className="intro__inner">
                    <h1 className="intro__title">{title}</h1>
                    <ul className="intro__list">
                        <li className="intro__item">
                            <Link className="intro__link" to="/">Главная</Link>
                        </li>
                        <li className="intro__item">{title}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
