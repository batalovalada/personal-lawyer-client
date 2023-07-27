import React, {useContext, useEffect} from "react";
import { AuthContext } from "../context";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import { Link, useNavigate} from "react-router-dom";
import { useInput } from "../hooks/useValidation";

interface SignInFormProps {
    isModal: boolean;
    setActive: (active: boolean) => void;
    fromPage: string;
    active: boolean;
}

const SignInForm = ({ isModal, fromPage, setActive, active }: SignInFormProps): JSX.Element => {
    const email = useInput('', { isEmpty: true, isEmail: true });
    const password = useInput('', { isEmpty: true });

    //authorization
    const { setIsAuth } = useContext(AuthContext);

    const navigate = useNavigate();

    const login = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        localStorage.setItem('auth', 'true');
        setIsAuth(true);
        if (!isModal) navigate(fromPage, { replace: true });
    }

    //close modal when link is clicked
    const handleLink = () => {
        if (isModal) {
            setActive(false)
        }
    }

    //clear form when modal active is false
    useEffect(() => {
        if (!active) {
            email.setValue('');
            email.setIsDirty(false);
            password.setValue('');
            password.setIsDirty(false);
        }
    }, [active])

    return (
        <form className="form-sign" action="/" method="post" onSubmit={login}>
            <div className="form__item">
                <MyInput 
                    onBlur={(): void => email.onBlur()}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => email.onChange(e)}
                    value={email.value}
                    type="email"
                    placeholder="Email"
                />
                <div className="form__labels">
                    {(email.isDirty && email.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                    {(email.isDirty && email.emailError) && <label className="form__err-label">Email введён некорректно!</label>}
                </div>
            </div>
            <div className="form__item">
                <MyInput
                    onBlur={(): void => password.onBlur()}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => password.onChange(e)}
                    value={password.value}
                    type="password"
                    placeholder="Пароль"
                />
                <div className="form__labels">
                    {(password.isDirty && password.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                </div>
                <Link className="form-sign__link form-sign__link--ml" to="/reset" onClick={handleLink}>Забыли пароль?</Link>
            </div>
            <div className="form-sign__btns">
                <MyButton 
                    disabled={!email.inputValid || !password.inputValid}
                    type="submit"
                    onClick={handleLink}>
                        Войти
                </MyButton>
                <Link className="form-sign__link" to="/sign-up" onClick={handleLink}>Регистрация</Link>
            </div>
        </form>
    )
}

export default SignInForm;