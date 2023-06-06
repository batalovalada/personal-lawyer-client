import React, {useState} from 'react';
import Nav from './Nav';
import Icons from './Icons';
import MyInput from './UI/input/MyInput';

const Header = () => {
    const [value, setValue] = useState(''); //get value from search input

    function searchValue(e) {
        e.preventDefault()
        console.log(value);
        setValue('');
    }
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">

                    <div className="header__main">
                        <div className="header__left">
                            <div className="header__item">
                                <a className="header__link" href="tel:+7921*******">+7-921-***-**-**</a>
                            </div>
                            <div className="header__item">
                                <a className="header__link" href="mailto:personal_lawyer@gmail.com">personal_lawyer@gmail.com</a>
                            </div>
                        </div>
                        <div className="header__logo">
                            <Icons icon={{id: 'logo', nameClass: 'logo__icon header__logo-icon'}} />
                            <h3 className="logo__title">Personal Lawyer</h3>
                        </div>
                        <div className="header__right">
                            <form className="header__form" action="/" method="get">
                                <MyInput type="text" placeholder="Поиск" value={value} onChange={event => setValue(event.target.value)}/>
                                <button className="btn btn--search" type="button" onClick={searchValue}>
                                    <Icons icon={{ id: 'search', nameClass: 'header__icon header__icon--search' }} />
                                </button>
                            </form>
                            <div className="header__item">
                                <a className="header__link-icon" href="#">
                                    Войти
                                    <Icons icon={{ id: 'sign-in', nameClass: 'header__icon'}}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <Nav/>
                </div>
            </div>
        </header>
    )
}

export default Header;