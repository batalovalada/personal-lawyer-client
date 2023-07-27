import React from 'react';
import Icons from './Icons';

const Social = (): JSX.Element => {
    return (
        <ul className="social">
            <li className="social__item">
                <a className="social__link" href="#" target="_blank">
                    <Icons icon={{ id: 'facebook', nameClass: 'social__icon' }}/>
                </a>
            </li>
            <li className="social__item">
                <a className="social__link" href="#" target="_blank">
                    <Icons icon={{ id: 'telegram', nameClass: 'social__icon' }} />
                </a>
            </li>
            <li className="social__item">
                <a className="social__link" href="#" target="_blank">
                    <Icons icon={{ id: 'vk', nameClass: 'social__icon' }} />
                </a>
            </li>
            <li className="social__item">
                <a className="social__link" href="#" target="_blank">
                    <Icons icon={{ id: 'youtube', nameClass: 'social__icon' }} />
                </a>
            </li>
        </ul>
    )
}

export default Social;