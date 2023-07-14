import React, {useContext} from "react";
import { AuthContext } from "../../context";
import { useInput } from "../../hooks/useValidation";
import { useNavigate } from "react-router-dom";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import Intro from "../Intro";

const ProfilePage = () => {
    const MIN_NAME = 5;
    const MIN_PASSWORD = 8;
    const name = useInput('Иван Иванов', { isEmpty: true, minLength: MIN_NAME })
    const email = useInput('ivan.ivanov@gmail.com', { isEmpty: true, isEmail: true });
    const password1 = useInput('', { isEmpty: true, minLength: MIN_PASSWORD });
    const password2 = useInput('', { isEmpty: true, minLength: MIN_PASSWORD, checkPassword: password1.value });

    //authorization
    const { setIsAuth } = useContext(AuthContext);
    //navigate
    const navigate = useNavigate();

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
        navigate('/sign-in', { replace: true });
    }
    

    return (
        <div className="page">
            <Intro title="Профиль"/>
            <div className="profile">
                <div className="container">
                    <div className="profile__inner">
                        <form className="form-profile" action="/" method="post">
                            <div className="form-profile__avatar">
                                <div className="form-profile__photo">
                                    <img className="form-profile__img" src="https://placehold.it/150" alt="" />
                                </div>
                                <label className="form-profile__file">
                                    <input type="file" />
                                    выбрать фото профиля
                                </label>
                            </div>
                            <div className="form-profile__main">
                                <div className="form__item">
                                    <MyInput onBlur={() => name.onBlur()} onChange={e => name.onChange(e)} value={name.value} type="text" placeholder="Имя Фамилия"/>
                                    <div className="form__labels">
                                        {(name.isDirty && name.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                                        {(name.isDirty && name.minLengthErr) && <label className="form__err-label">{`Требуется не менее ${MIN_NAME} символов!`}</label>}
                                    </div>
                                </div>
                                <div className="form__item">
                                    <MyInput onBlur={() => email.onBlur()} onChange={e => email.onChange(e)} value={email.value} type="email" placeholder="Email" />
                                    <div className="form__labels">
                                        {(email.isDirty && email.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                                        {(email.isDirty && email.emailError) && <label className="form__err-label">Email введён некорректно!</label>}
                                    </div>
                                </div>
                                <div className="form__item">
                                    <MyInput onBlur={() => password1.onBlur()} onChange={e => password1.onChange(e)} value={password1.value} type="password" placeholder="Пароль" />
                                    <div className="form__labels">
                                        {(password1.isDirty && password1.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                                        {(password1.isDirty && password1.minLengthErr) && <label className="form__err-label">{`Требуется не менее ${MIN_PASSWORD} символов!`}</label>}
                                    </div>
                                </div>
                                <div className="form__item">
                                    <MyInput onBlur={() => password2.onBlur()} onChange={e => password2.onChange(e)} value={password2.value} type="password" placeholder="Подтвердите пароль" />
                                    <div className="form__labels">
                                        {(password2.isDirty && password2.isEmpty) && <label className="form__err-label">Подтвердите пароль!</label>}
                                        {(password2.isDirty && password2.minLengthErr) && <label className="form__err-label">{`Требуется не менее ${MIN_PASSWORD} символов!`}</label>}
                                        {(password2.isDirty && password2.passwordError) && <label className="form__err-label">Неверный пароль!</label>}
                                    </div>
                                </div>
                                <div className="form-profile__btns">
                                    <MyButton disabled={!name.inputValid || !email.inputValid || !password1.inputValid || !password2.inputValid} type="submit">Отправить</MyButton>
                                    <button className="form-profile__link" type="button" onClick={logout}>Выйти</button>
                                </div>
                            </div> {/* ./form-profile__main */}
                        </form>
                    </div> {/* ./profile__inner */}
                </div> {/* ./container */}
            </div> {/* ./profile */}
        </div>
    )
}

export default ProfilePage;