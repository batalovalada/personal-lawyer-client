import React from 'react';
import Icons from './Icons';
import Social from './Social';

const Footer = () => {
    const cities = [
        { name: 'Москва', href: '#'},
        { name: 'Санкт-Петербург', href: '#' },
        { name: 'Новосибирск', href: '#' },
        { name: 'Нижний Новгород', href: '#' },
        { name: 'Мурманск', href: '#' },
        { name: 'Выборг', href: '#' },
        { name: 'Красноярск', href: '#' }
    ]

    const navLinks = [
        { name: 'Главная', href: '#' },
        { name: 'О нас', href: '#' },
        { name: 'Услуги', href: '#' },
        { name: 'Статьи', href: '#' },
        { name: 'Контакты', href: '#' }
    ]

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__main">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <div className="footer__logo">
                                    <Icons icon={{ id: 'logo', nameClass: 'logo__icon logo__icon--footer' }} />
                                    <h3 className="logo__title logo__title--footer">Personal Lawyer</h3>
                                </div>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="#">Карта сайта</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="#">Правовая информация</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="#">Политика обработки персональных данных</a>
                            </li>
                        </ul>
                        <ul className="footer__list">
                            {navLinks.map(navLink => 
                                <li className="footer__item" key={navLink.name}>
                                    <a className="footer__link" href={navLink.href}>{navLink.name}</a>
                                </li>
                            )}
                        </ul>
                        <ul className="footer__list">
                            {cities.map(city => 
                                <li className="footer__item" key={city.name}>
                                    <a className="footer__link" href={city.href}>{city.name}</a>
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

export default Footer;