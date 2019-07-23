import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';

import './styles.scss'

const CardCheckbox = ({ 
    checked,
    name,
    id,
    value,
    winCardValue,
    disabled,
    innerNumber,
    onChange,
    ...props 
}) => {
    return (
        <Checkbox
            checked={checked}
            name={name}
            id={id}
            value={value}
            icon={<div className={`${disabled && winCardValue && "checked"}`}>{innerNumber}</div>}
            checkedIcon={<div className={`${disabled && winCardValue ? "win" : "lose"}`}>{innerNumber}</div>}
            disabled={disabled}
            onChange={onChange}
            classes={{
                root: "root",
                checked: `${disabled && winCardValue ? "checked-win" : 'checked-lose'}`
            }}
            {...props}
        />
    );
}

export default CardCheckbox;
