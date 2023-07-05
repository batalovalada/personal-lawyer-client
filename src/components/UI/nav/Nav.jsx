import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({active, setActive, bodyScroll}) => {
    const links = [
        { name: 'Главная', to: '/'},
        { name: 'О нас', to: '/about-us' },
        { name: 'Услуги', to: '/services' },
        { name: 'Статьи', to: '/articles' },
        { name: 'Контакты', to: '/contacts' }
    ]
    return (
        <nav className={active ? 'nav show' : 'nav'} onClick={() => {setActive(false); bodyScroll()}}>
            <div className="nav__mask"/>
            <ul className="nav__list" onClick={e => e.stopPropagation()}>
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