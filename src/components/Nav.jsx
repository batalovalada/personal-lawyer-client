import React from 'react';

const Nav = () => {
    const links = [
        { name: 'Главная', href: '#'},
        { name: 'О нас', href: '#' },
        { name: 'Услуги', href: '#' },
        { name: 'Статьи', href: '#' },
        { name: 'Контакты', href: '#' }
    ]
    return (
        <nav className="nav">
            <ul className="nav__list">
                {links.map(link => 
                    <li className="nav__item" key={link.name}>
                        <a className="nav__link" href={link.href}>{link.name}</a>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Nav;