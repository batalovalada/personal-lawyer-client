import React from "react";
import MyInput from "./UI/input/MyInput";
import MyTextarea from "./UI/textarea/MyTextarea";
import MyButton from "./UI/button/MyButton";

const QuestionsForm = ({title}) => {
    return (
        <div className="questions">
            <h3 className="questions__title">{title}</h3>
            <form className="form-questions" action="/" method="post">
                <div className="form-questions__item">
                    <MyInput type="text" placeholder="Имя" />
                </div>
                <div className="form-questions__item">
                    <MyInput type="text" placeholder="Телефон" />
                </div>
                <div className="form-questions__item">
                    <MyTextarea type="text" placeholder="Вопрос" rows="5" />
                </div>
                <MyButton type="submit">Отправить</MyButton>
            </form>
        </div>
    )
}

export default QuestionsForm;