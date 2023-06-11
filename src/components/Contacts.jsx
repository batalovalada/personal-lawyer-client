import React from "react";
import Icons from "./Icons";
import Social from "./Social";

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="contacts__main">
                <div className="contacts__inf">
                    <div className="contacts__inf-inner">
                        <h3 className="contacts__title">Контактная информация</h3>
                        <ul className="contacts__list">
                            <li className="contacts__item">
                                <Icons icon={{ id: 'adress', nameClass: 'contacts__icon' }} />
                                <a href="#" className="contacts__link">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a>
                            </li>
                            <li className="contacts__item">
                                <Icons icon={{ id: 'adress', nameClass: 'contacts__icon' }} />
                                <a href="#" className="contacts__link">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a>
                            </li>
                            <li className="contacts__item">
                                <Icons icon={{ id: 'phone', nameClass: 'contacts__icon' }} />
                                <a href="tel:+7921*******" className="contacts__link">+7-921-***-**-**</a>
                            </li>
                            <li className="contacts__item">
                                <Icons icon={{ id: 'phone', nameClass: 'contacts__icon' }} />
                                <a href="tel:+7921*******" className="contacts__link">+7-921-***-**-**</a>
                            </li>
                            <li className="contacts__item">
                                <Icons icon={{ id: 'phone', nameClass: 'contacts__icon' }} />
                                <a href="tel:+7921*******" className="contacts__link">+7-921-***-**-**</a>
                            </li>
                            <li className="contacts__item contacts__item--mb">
                                <Icons icon={{ id: 'email', nameClass: 'contacts__icon' }} />
                                <a href="mailto:personal_lawyer@gmail.com" className="contacts__link">personal_lawyer@gmail.com</a>
                            </li>
                            <li className="contacts__item">
                                <Social />
                            </li>
                        </ul>
                    </div>
                </div>

                <iframe className="contacts__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A226b45de32d73da5dcc25106631d97b64ec519a42dc9318cff5e823b347753af&amp;source=constructor" frameBorder="0"></iframe>
            </div>
        </div>
    )
}

export default Contacts;