import React from 'react';
import { NavLink } from 'react-router-dom';
import { INavLink } from '../../../../shared/types/INav';
import { links } from '../../consts/links';

interface NavProps {
    setActive: (active: boolean) => void;
}

export const Nav = ({ setActive }: NavProps): JSX.Element => {
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
