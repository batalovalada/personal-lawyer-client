import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const links = [
        { name: 'Главная', to: '/'},
        { name: 'О нас', to: '/about-us' },
        { name: 'Услуги', to: '/services' },
        { name: 'Статьи', to: '/articles' },
        { name: 'Контакты', to: '/contacts' }
    ]
    return (
        <nav className="nav">
            <ul className="nav__list">
                {links.map(link => 
                    <li className="nav__item" key={link.name}>
                        <NavLink className="nav__link" to={link.to}>{link.name}</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Nav;