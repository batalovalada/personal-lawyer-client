import React, {useState, useContext, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../../shared/lib/context';
import {Nav} from '../Nav';
import Icons from '../../../../shared/UI/icon/Icon';
import MyModal from '../../../../shared/UI/modal/MyModal';
import { SignInForm } from '../../../../features/AuthForms';

export const Header = (): JSX.Element => {
    //======================modal===================================
    const [modal, setModal] = useState<boolean>(false);

    //burger menu===================================================
    //When menu is active, body has class '.show-nav'.
    //Positions .nav, .header__burger and .header__link.check-nav base on body class '.show-nav'
    const [menuActive, setMenuActive] = useState<boolean>(false);
    useEffect(():void => {
        if (menuActive) document.body.classList.add('show-nav')
        else document.body.classList.remove('show-nav')
    }, [menuActive])

    //authorization link
    const { isAuth} = useContext(AuthContext);

    //check if user in sign-in, sign-up or reset pages to hide button 'sign-in' in this way
    const location = useLocation();
    const checkLoginPage = (): boolean => {
        return location.pathname === '/sign-in' || location.pathname === '/sign-up' || location.pathname === '/reset'
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
                                {isAuth
                                    ?
                                        <Link className="header__link-icon header__link-icon--baseline check-nav" to="profile">
                                            Профиль
                                            <Icons icon={{ id: 'profile', nameClass: 'header__icon header__icon--small' }} />
                                        </Link>
                                    :
                                        checkLoginPage()
                                        ? 
                                            <></>
                                        :
                                            <>
                                                <button className="header__link-icon check-nav" type="button" onClick={():void => setModal(true)}>
                                                    Войти
                                                    <Icons icon={{ id: 'sign-in', nameClass: 'header__icon' }} />
                                                </button>
                                                <MyModal active={modal} setActive={setModal}>
                                                    <div className="form-sign__modal">
                                                        <h3 className="form-sign__modal-title">Вход</h3>
                                                    <SignInForm isModal={true} active={modal} setActive={setModal} fromPage={location.pathname}/>
                                                    </div>
                                                </MyModal>
                                            </>}
                                
                            </div>
                            <div className="header__item">
                                <button className='header__burger'
                                    type="button"
                                    onClick={():void => setMenuActive(!menuActive)
                                }>
                                    <span>Menu</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Nav setActive={setMenuActive}/>
        </header>
    )
}
