import React from 'react';
import { IAbout } from '../../../../shared/types/IAbout';
import MyLink from '../../../../shared/UI/link/MyLink';
import Icon from '../../../../shared/UI/icon/Icon';

interface AboutItemProps {
    item: IAbout;
}

export const AboutItem = ({ item }: AboutItemProps): JSX.Element => {
    return (
        <div className="about__item">
            <div className="about__header">
                <Icon icon={{ id: `${item.icon}`, nameClass: 'about__icon' }} />
            </div>
            <div className="about__content">
                <h3 className="about__title">{item.title}</h3>
                <div className="about__text">{item.text}</div>
            </div>
            <MyLink to={`/about/${item.id}`}>Подробнее</MyLink>
        </div>
    )
}