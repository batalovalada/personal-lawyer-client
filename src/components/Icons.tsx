import React from 'react';
import IconsSvg from '../assets/images/icons.svg';
import { IIcons } from '../types/IIcons';

interface IconsProps {
    icon: IIcons;
}

const Icons = ({ icon }: IconsProps): JSX.Element => {
    return (
        <svg className={icon.nameClass}>
            <use href={`${IconsSvg}#${icon.id}`}></use>
        </svg>
    )
}

export default Icons;