import React from 'react';
import MyButton from './UI/button/MyButton';
import Icons from './Icons';

const AboutItem = (props) => {
    return (
        <div className="about__item">
            <div className="about__header">
                <Icons icon={{ id: `${props.item.icon}`, nameClass: 'about__icon' }} />
            </div>
            <div className="about__content">
                <h3 className="about__title">{props.item.title}</h3>
                <div className="about__text">{props.item.text}</div>
            </div>
            <MyButton type="button">Подробнее</MyButton>
        </div>
    )
}

export default AboutItem;