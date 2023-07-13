import { useState, useEffect } from "react";

export const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [minLengthErr, setMinLengthErr] = useState(false);
    const [maxLengthErr, setMaxLengthErr] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthErr(true) : setMinLengthErr(false);
                    break;
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthErr(true) : setMaxLengthErr(false);
                    break;
                case 'isEmpty': 
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break;
                case 'isEmail':
                    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
                    break;
                case 'checkPassword':
                    value !== validations[validation] ? setPasswordError(true) : setPasswordError(false);
                    break;
                default: 
                    break;
            }
        }
    }, [value]);

    useEffect(() => {
        if (isEmpty || minLengthErr || maxLengthErr || emailError || passwordError) {
            setInputValid(false);
        } else {
            setInputValid(true);
        }

    }, [isEmpty, minLengthErr, maxLengthErr, emailError, passwordError])

    return {
        isEmpty,
        minLengthErr,
        maxLengthErr,
        emailError,
        passwordError,
        inputValid
    }
}

export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        setIsDirty(true)
    }

    return {
        value,
        setValue,
        onChange,
        onBlur,
        isDirty,
        setIsDirty,
        ...valid
    }

}