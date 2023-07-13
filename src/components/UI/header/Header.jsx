import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import Nav from '../nav/Nav';
import Icons from '../../Icons';
import MyModal from '../modal/MyModal';
import SignInForm from '../../SignInForm';

const Header = () => {
    //======================modal===================================
    const [modal, setModal] = useState(false);

    //burger menu
    const [menuActive, setMenuActive] = useState(false);

    //remove scroll when menu is active
    function bodyNavScroll() {
        document.body.classList.toggle('show-nav')
    }

    //remove scroll when modal is active
    function bodyModalScroll() {
        document.body.classList.toggle('no-scroll')
    }

    //authorization link
    const { isAuth} = useContext(AuthContext);

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
                                {isAuth
                                ?
                                    <Link className="header__link-icon header__link-icon--baseline" to="profile">
                                        Профиль
                                        <Icons icon={{ id: 'profile', nameClass: 'header__icon header__icon--small' }} />
                                    </Link>
                                :
                                <>
                                    <button className="header__link-icon" type="button" onClick={() => {setModal(true); bodyModalScroll()}}>
                                        Войти
                                        <Icons icon={{ id: 'sign-in', nameClass: 'header__icon' }} />
                                    </button>
                                    <MyModal active={modal} setActive={setModal}>
                                        <div className="form-sign__modal">
                                            <h3 className="form-sign__modal-title">Вход</h3>
                                            <SignInForm modal={true} active={modal} setActive={setModal}/>
                                        </div>
                                    </MyModal>
                                </>}
                                
                            </div>
                            <div className="header__item">
                                <button className={menuActive ? 'header__burger active' : 'header__burger'}
                                    type="button"
                                    onClick={() => {
                                        setMenuActive(!menuActive);
                                        bodyNavScroll();
                                }}>
                                    <span>Menu</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Nav active={menuActive} setActive={setMenuActive} bodyScroll={bodyNavScroll}/>
        </header>
    )
}

export default Header;