import React from 'react';
import { NavLink } from 'react-router-dom';
import { INavLink } from '../../../types/INav';

interface NavProps {
    setActive: (active: boolean) => void;
}

const Nav = ({ setActive }: NavProps): JSX.Element => {
    const links: INavLink[] = [
        { name: 'Главная', to: '/'},
        { name: 'О нас', to: '/about-us' },
        { name: 'Услуги', to: '/services' },
        { name: 'Статьи', to: '/articles' },
        { name: 'Контакты', to: '/contacts' }
    ]
    return (
        <nav className='nav' onClick={():void => setActive(false)}>
            <div className="nav__mask"/>
            <ul className="nav__list" onClick={(e: React.MouseEvent):void => e.stopPropagation()}>
                {links.map((link: INavLink): React.ReactNode =>
                    <li className="nav__item" key={link.name}>
                        <NavLink className="nav__link" to={link.to} onClick={():void => setActive(false)}>{link.name}</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Nav;