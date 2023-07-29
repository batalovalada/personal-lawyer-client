import React, {useEffect} from "react";
import { useInput } from "../../../../shared/lib/hooks/useValidation";
import MyInput from "../../../../shared/UI/input/MyInput";
import MyButton from "../../../../shared/UI/button/MyButton";

interface OrderFormProps {
    active: boolean;
    setActive: (modal: boolean) => void;
}

export const OrderForm = ({ active, setActive }: OrderFormProps): JSX.Element => {
    //validation
    const MIN_NAME: number = 5;
    const MIN_NUMBER: number = 11;
    const MAX_NUMBER: number = 12;
    const name = useInput('', { isEmpty: true, minLength: MIN_NAME })
    const number = useInput('', { isEmpty: true, minLength: MIN_NUMBER, maxLength: MAX_NUMBER});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setActive(false);
    }

    //clear form
    useEffect(():void => {
        if (!active) {
            name.setValue('');
            name.setIsDirty(false);
            number.setValue('');
            number.setIsDirty(false);
        }
    }, [active])
    
    return (
        <form className="form-order" action="/" method="post" onSubmit={handleSubmit}>
            <div className="form__item">
                <MyInput
                    onBlur={(): void => name.onBlur()}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>):void => name.onChange(e)}
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
                    onBlur={(): void => number.onBlur()}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>):void => number.onChange(e)}
                    value={number.value}
                    type="tel"
                    placeholder="Телефон"
                />
                <div className="form__labels">
                    {(number.isDirty && number.isEmpty) && <label className="form__err-label">Поле не заполнено!</label>}
                    {(number.isDirty && number.minLengthErr) && <label className="form__err-label">{`Требуется не менее ${MIN_NUMBER} символов!`}</label>}
                    {(number.isDirty && number.maxLengthErr) && <label className="form__err-label">{`Требуется не более ${MAX_NUMBER} символов!`}</label>}
                </div>
            </div>
            <div className="form-order__btn">
                <MyButton disabled={!name.inputValid || !number.inputValid} type="submit">
                    Заказать звонок
                </MyButton>
            </div>
        </form>
    )
}
