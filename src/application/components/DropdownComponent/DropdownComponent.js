import React, { useState } from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ButtonComponent from '../ButtonComponent';

const DropdownComponent = ({
    options
}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [activeId, setIsActive] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleChoose = (newIndex) => {
        setIsActive(newIndex)
        handleClose();
    }

    return (
        <div>
            <ButtonComponent
                innerText={activeId ? options[activeId - 1].value : "Choose city"}
                onClick={handleClick}
            />
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
            >
                {options.map(option => (
                    <MenuItem key={option.value} selected={option.id === activeId} onClick={() => handleChoose(option.id)}>
                        {option.value}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}

export default DropdownComponent;
