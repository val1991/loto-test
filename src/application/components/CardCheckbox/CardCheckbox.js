import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';

const CardCheckbox = ({ checked, name, id, value, disabled, onChange, ...props }) => {
    return (
        <Checkbox
            checked={checked}
            name={name}
            id={id}
            value={value}
            icon={<div>X</div>}
            checkedIcon={<div>V</div>}
            disabled={disabled}
            onChange={onChange}
            {...props}
        />
    );
}

export default CardCheckbox;
