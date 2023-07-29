import React from 'react';
import Icon from '../../../../shared/UI/icon/Icon';

export const Social = (): JSX.Element => {
    return (
        <ul className="social">
            <li className="social__item">
                <a className="social__link" href="#" target="_blank">
                    <Icon icon={{ id: 'facebook', nameClass: 'social__icon' }}/>
                </a>
            </li>
            <li className="social__item">
                <a className="social__link" href="#" target="_blank">
                    <Icon icon={{ id: 'telegram', nameClass: 'social__icon' }} />
                </a>
            </li>
            <li className="social__item">
                <a className="social__link" href="#" target="_blank">
                    <Icon icon={{ id: 'vk', nameClass: 'social__icon' }} />
                </a>
            </li>
            <li className="social__item">
                <a className="social__link" href="#" target="_blank">
                    <Icon icon={{ id: 'youtube', nameClass: 'social__icon' }} />
                </a>
            </li>
        </ul>
    )
}
