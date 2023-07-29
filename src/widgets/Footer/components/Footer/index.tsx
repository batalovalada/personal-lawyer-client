import React from 'react';
import { INavLink } from '../../../../shared/types/INav';
import { IFooterCity } from '../../model/types/IFooterCity';
import { cities } from '../../consts/cities';
import { navLinks } from '../../consts/navLinks';
import { Link } from 'react-router-dom';
import Icon from '../../../../shared/UI/icon/Icon';
import { Social } from '../../../../entities/Social';

export const Footer = (): JSX.Element => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__main">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <div className="footer__logo">
                                    <Icon icon={{ id: 'logo', nameClass: 'logo__icon logo__icon--footer' }} />
                                    <h3 className="logo__title logo__title--footer">Personal Lawyer</h3>
                                </div>
                            </li>
                            <li className="footer__item">
                                <Link className="footer__link" to="#">Карта сайта</Link>
                            </li>
                            <li className="footer__item">
                                <Link className="footer__link" to="#">Правовая информация</Link>
                            </li>
                            <li className="footer__item">
                                <Link className="footer__link" to="#">Политика обработки персональных данных</Link>
                            </li>
                        </ul>
                        <ul className="footer__list">
                            {navLinks.map((navLink: INavLink): React.ReactNode => 
                                <li className="footer__item" key={navLink.name}>
                                    <Link className="footer__link" to={navLink.to}>{navLink.name}</Link>
                                </li>
                            )}
                        </ul>
                        <ul className="footer__list">
                            {cities.map((city: IFooterCity): React.ReactNode => 
                                <li className="footer__item" key={city.name}>
                                    <Link className="footer__link" to={city.href}>{city.name}</Link>
                                </li>
                            )}
                        </ul>
                        <ul className="footer__list">
                            <li className="footer__item footer__item--mb">
                                <Social />
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="tel:+7921*******">Тел: +7-921-***-**-**</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="mailto:personal_lawyer@gmail.com">Email: personal_lawyer@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__copyright">&copy; 2023 ООО «Personal Lawyer»</div>
                </div>
            </div>
        </footer>
    )
}
