import React, { memo } from 'react';

import CardCheckbox from '../CardCheckbox';

const CheckBoxField = ({
    field: { name, value, onChange, onBlur },
    id,
    label,
    className,
    winCards,
    ...props
}) => {
    return (
        <CardCheckbox
            name={name}
            id={id}
            value={value}
            checked={value}
            onChange={onChange}
            onBlur={onBlur}
            winCardValue={winCards.includes(id)}
            {...props}
        />
    );
}

export default memo(CheckBoxField);