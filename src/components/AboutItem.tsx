import React from 'react';
import { IAbout } from '../types/IAbout';
import MyLink from './UI/link/MyLink';
import Icons from './Icons';

interface AboutItemProps {
    item: IAbout;
}

const AboutItem = ({ item }: AboutItemProps): JSX.Element => {
    return (
        <div className="about__item">
            <div className="about__header">
                <Icons icon={{ id: `${item.icon}`, nameClass: 'about__icon' }} />
            </div>
            <div className="about__content">
                <h3 className="about__title">{item.title}</h3>
                <div className="about__text">{item.text}</div>
            </div>
            <MyLink to={`/about/${item.id}`}>Подробнее</MyLink>
        </div>
    )
}

export default AboutItem;