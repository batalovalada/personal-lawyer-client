import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useValidation";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const ResetForm = () => {
    const email = useInput('', { isEmpty: true, isEmail: true });

    //navigate after authorization
    const navigate = useNavigate();
    const goSignIn = () => navigate('/sign-in', { replace: true });

    return (
        <form className="form-sign" action="/" method="post">
            <div className="form-sign__item">
                <MyInput onBlur={() => email.onBlur()} onChange={e => email.onChange(e)} value={email.value} type="email" placeholder="Email" />
                <div className="form__labels">
                    {(email.isDirty && email.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                    {(email.isDirty && email.emailError) && <label className="form__err-label">Email введён некорректно!</label>}
                </div>
            </div>
            <div className="form-sign__btns">
                <MyButton disabled={!email.inputValid} type="submit" onClick={e => {e.preventDefault(); goSignIn()}}>Восстановить</MyButton>
                <Link className="form-sign__link" to="/sign-in">Войти</Link>
                <Link className="form-sign__link" to="/sign-up">Регистрация</Link>
            </div>
        </form>
    )
}

export default ResetForm;