import React from 'react';
import IconsSvg from '../assets/images/icons.svg';

const Icons = (props) => {
    return (
        <svg className={props.icon.nameClass}>
            <use href={`${IconsSvg}#${props.icon.id}`}></use>
        </svg>
    )
}

export default Icons;