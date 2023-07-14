import React, {useContext} from "react";
import { AuthContext } from "../context";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import { Link, useNavigate} from "react-router-dom";
import { useInput } from "../hooks/useValidation";

const SignInForm = (props) => {
    const email = useInput('', { isEmpty: true, isEmail: true });
    const password = useInput('', { isEmpty: true });

    function bodyScroll() {
        document.body.classList.toggle('no-scroll')
    }

    //authorization
    const { setIsAuth} = useContext(AuthContext);

    const navigate = useNavigate();

    const login = e => {
        e.preventDefault();
        localStorage.setItem('auth', 'true');
        setIsAuth(true);
        navigate(props.fromPage, { replace: true });
    }

    return (
        <form className="form-sign" action="/" method="post" onSubmit={login}>
            <div className="form__item">
                <MyInput onBlur={() => email.onBlur()} onChange={e => email.onChange(e)} value={email.value} type="email" placeholder="Email" />
                <div className="form__labels">
                    {(email.isDirty && email.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                    {(email.isDirty && email.emailError) && <label className="form__err-label">Email введён некорректно!</label>}
                </div>
            </div>
            <div className="form__item">
                <MyInput onBlur={() => password.onBlur()} onChange={e => password.onChange(e)} value={password.value} type="password" placeholder="Пароль" />
                <div className="form__labels">
                    {(password.isDirty && password.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                </div>
                <Link className="form-sign__link form-sign__link--ml" to="/reset" onClick={
                    () => {
                        if (props.modal === true) {
                            props.setActive(false);
                            bodyScroll();
                        }
                    }
                }>Забыли пароль?</Link>
            </div>
            <div className="form-sign__btns">
                <MyButton 
                    disabled={!email.inputValid || !password.inputValid}
                    type="submit"
                    onClick={
                        () => {
                            if (props.modal === true) {
                                props.setActive(false);
                                bodyScroll();
                            }
                        }
                    }>
                        Войти
                </MyButton>
                <Link className="form-sign__link" to="/sign-up" onClick={
                    () => {
                        if (props.modal === true) {
                            props.setActive(false);
                            bodyScroll();
                        }
                    }
                }>Регистрация</Link>
            </div>
        </form>
    )
}

export default SignInForm;