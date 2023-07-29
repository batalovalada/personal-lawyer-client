import React, {ComponentProps, ElementType} from 'react';
import classes from './MyButton.module.css';

type MyButtonOwnProps<E extends ElementType = ElementType> = {
    as?: E;
}

type MyButtonProps<E extends ElementType> = MyButtonOwnProps<E> & Omit<ComponentProps<E>, keyof MyButtonOwnProps>

const defaultElement = 'button';

export default function MyButton<E extends ElementType = typeof defaultElement > ({ children, as, ...props }: MyButtonProps<E>) {
    const TagName = as || defaultElement
    return (
        <TagName className={classes.myBtn} {...props}>
            {children}
        </TagName>
    )
}

 