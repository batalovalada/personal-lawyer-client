import React from "react";
import MyInput from "./UI/input/MyInput";
import MyTextarea from "./UI/textarea/MyTextarea";
import MyButton from "./UI/button/MyButton";
import { useInput } from "../hooks/useValidation";

const QuestionsForm = ({title}) => {
    //validation
    const MIN_NAME = 5;
    const name = useInput('', { isEmpty: true, minLength: MIN_NAME});
    const email = useInput('', { isEmpty: true, isEmail: true});
    const message = useInput('', { isEmpty: true});


    return (
        <div className="questions">
            <h3 className="questions__title">{title}</h3>
            <form className="form-questions" action="/" method="post">
                <div className="form-questions__item">
                    <MyInput onBlur={() => name.onBlur()} onChange={e => name.onChange(e)} value={name.value} type="text" placeholder="Имя Фамилия" />
                    <div className="form__labels">
                        {(name.isDirty && name.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                        {(name.isDirty && name.minLengthErr) && <label className="form__err-label">{`Требуется не менее ${MIN_NAME} символов!`}</label>}
                    </div>
                </div>
                <div className="form-questions__item">
                    <MyInput onBlur={() => email.onBlur()} onChange={e => email.onChange(e)} value={email.value} type="text" placeholder="Email" />
                    <div className="form__labels">
                        {(email.isDirty && email.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                        {(email.isDirty && email.emailError) && <label className="form__err-label">Email введён некорректно!</label>}
                    </div>
                </div>
                <div className="form-questions__item">
                    <MyTextarea onBlur={() => message.onBlur()} onChange={e => message.onChange(e)} value={message.value} type="text" placeholder="Вопрос" rows="5" />
                    <div className="form__labels">
                        {(message.isDirty && message.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                    </div>
                </div>
                <MyButton disabled={!name.inputValid || !email.inputValid || !message.inputValid} type="submit">Отправить</MyButton>
            </form>
        </div>
    )
}

export default QuestionsForm;