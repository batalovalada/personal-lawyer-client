import React from 'react';
import classes from './MySelect.module.css';

const MySelect = ({ options, defaultValue, value, onChange, id }) => {
    return (
        <select className={classes.mySelect} id={id} value={value} onChange={e => onChange(e.target.value)}>
            <option disabled value="">{defaultValue}</option>
            {options.map(option => <option value={option.value} key={option.value}>{option.name}</option>)}
        </select>
    )
}

export default MySelect;