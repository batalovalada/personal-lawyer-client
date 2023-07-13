import React from "react";
import { useInput } from "../hooks/useValidation";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";


const OrderForm = ({modal, setActive}) => {
    //validation
    const MIN_NAME = 5;
    const MIN_NUMBER = 11;
    const MAX_NUMBER = 12;
    const name = useInput('', { isEmpty: true, minLength: MIN_NAME })
    const number = useInput('', { isEmpty: true, minLength: MIN_NUMBER, maxLength: MAX_NUMBER});

    //remove scroll when modal is active
    function bodyModalScroll() {
        document.body.classList.toggle('no-scroll')
    }

    return (
        <form className="form-order" action="/" method="post">
            <div className="form__item">
                <MyInput onBlur={() => name.onBlur()} onChange={e => name.onChange(e)} value={name.value} type="text" placeholder="Имя Фамилия" />
                <div className="form__labels">
                    {(name.isDirty && name.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                    {(name.isDirty && name.minLengthErr) && <label className="form__err-label">{`Требуется не менее ${MIN_NAME} символов!`}</label>}
                </div>
            </div>
            <div className="form__item">
                <MyInput onBlur={() => number.onBlur()} onChange={e => number.onChange(e)} value={number.value} type="text" placeholder="Телефон"/>
                <div className="form__labels">
                    {(number.isDirty && number.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                    {(number.isDirty && number.minLengthErr) && <label className="form__err-label">{`Требуется не менее ${MIN_NUMBER} символов!`}</label>}
                    {(number.isDirty && number.maxLengthErr) && <label className="form__err-label">{`Требуется не более ${MAX_NUMBER} символов!`}</label>}
                </div>
            </div>
            <div className="form-order__btn">
                <MyButton
                    disabled={!name.inputValid || !number.inputValid}
                    type="submit"
                    onClick={e => {
                        e.preventDefault();
                        if (modal) {
                            setActive(false);
                            bodyModalScroll();
                            name.setValue('');
                            name.setIsDirty(false);
                            number.setValue('');
                            number.setIsDirty(false);
                        }
                    }}>
                    Заказать звонок
                </MyButton>
            </div>
        </form>
    )
}

export default OrderForm;