import React, {useState} from 'react';
import Nav from '../nav/Nav';
import Icons from '../../Icons';

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    //remove scroll when menu is active
    function bodyScroll() {
        document.body.classList.toggle('show-nav')
    }

    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="header__inner">
                        <div className="header__left">
                            <div className="header__item">
                                <a className="header__link" href="tel:+7921*******">+7-921-***-**-**</a>
                            </div>
                            <div className="header__item">
                                <a className="header__link" href="mailto:personal_lawyer@gmail.com">personal_lawyer@gmail.com</a>
                            </div>
                        </div>
                        <div className="header__logo">
                            <Icons icon={{ id: 'logo', nameClass: 'logo__icon header__logo-icon' }} />
                            <h3 className="logo__title">Personal Lawyer</h3>
                        </div>
                        <div className="header__right">
                            <div className="header__item">
                                <a className="header__link-icon" href="#">
                                    Войти
                                    <Icons icon={{ id: 'sign-in', nameClass: 'header__icon' }} />
                                </a>
                            </div>
                            <div className="header__item">
                                <button className={menuActive ? 'header__burger active' : 'header__burger'}
                                    type="button"
                                    onClick={() => {
                                        setMenuActive(!menuActive);
                                        bodyScroll();
                                }}>
                                    <span>Menu</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Nav active={menuActive} setActive={setMenuActive} bodyScroll={bodyScroll}/>
        </header>
    )
}

export default Header;