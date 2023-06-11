import React from 'react';
import MyLink from './UI/link/MyLink';
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
            <MyLink to={`/${props.item.id}`}>Подробнее</MyLink>
        </div>
    )
}

export default AboutItem;