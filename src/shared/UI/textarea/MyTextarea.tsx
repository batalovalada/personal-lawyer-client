import React from "react";
import classes from './MyTextarea.module.css';

export interface MyTextareaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
    //onBlur?: () => void;
    //onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value?: string;
    //placeholder?: string;
    rows?: any;
    cols?: any;
}

const MyTextarea: React.FC<MyTextareaProps> = (props) => {
    return (
        <textarea className={classes.myTextarea} {...props}/>
    )
}

export default MyTextarea;