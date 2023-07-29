import React from "react";
import MyInput from "../../../../shared/UI/input/MyInput";
import MyTextarea from "../../../../shared/UI/textarea/MyTextarea";
import MyButton from "../../../../shared/UI/button/MyButton";
import { useInput } from "../../../../shared/lib/hooks/useValidation";

interface QuestionsFormProps {
    title?: string;
}

export const QuestionsForm = ({ title }: QuestionsFormProps): JSX.Element => {
    //validation
    const MIN_NAME:number = 5;
    const name = useInput('', { isEmpty: true, minLength: MIN_NAME});
    const email = useInput('', { isEmpty: true, isEmail: true});
    const message = useInput('', { isEmpty: true});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        name.setValue('');
        name.setIsDirty(false);
        email.setValue('');
        email.setIsDirty(false);
        message.setValue('');
        message.setIsDirty(false);
    }

    return (
        <div className="questions">
            <h3 className="questions__title">{title}</h3>
            <form className="form-questions" action="/" method="post" onSubmit={handleSubmit}>
                <div className="form__item">
                    <MyInput 
                        onBlur={():void => name.onBlur()}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => name.onChange(e)}
                        value={name.value}
                        type="text"
                        placeholder="Имя Фамилия" 
                    />
                    <div className="form__labels">
                        {(name.isDirty && name.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                        {(name.isDirty && name.minLengthErr) && <label className="form__err-label">{`Требуется не менее ${MIN_NAME} символов!`}</label>}
                    </div>
                </div>
                <div className="form__item">
                    <MyInput
                        onBlur={():void => email.onBlur()}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => email.onChange(e)}
                        value={email.value}
                        type="text"
                        placeholder="Email"
                    />
                    <div className="form__labels">
                        {(email.isDirty && email.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                        {(email.isDirty && email.emailError) && <label className="form__err-label">Email введён некорректно!</label>}
                    </div>
                </div>
                <div className="form__item">
                    <MyTextarea
                        onBlur={():void => message.onBlur()}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => message.onChange(e)}
                        value={message.value}
                        placeholder="Вопрос"
                        rows="5"
                    />
                    <div className="form__labels">
                        {(message.isDirty && message.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                    </div>
                </div>
                <MyButton disabled={!name.inputValid || !email.inputValid || !message.inputValid} type="submit">Отправить</MyButton>
            </form>
        </div>
    )
}