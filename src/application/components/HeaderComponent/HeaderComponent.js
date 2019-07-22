import React from 'react';

import './style.scss';

import ButtonComponent from '../ButtonComponent';
import DropdownComponent from '../DropdownComponent';

const testOptions = [
    {
        id: 1,
        value: 'Kiev',
    },
    {
        id: 2,
        value: 'London',
    },
    {
        id: 3,
        value: 'Odessa',
    }
]

const HeaderComponent = () => {
    return (
        <header>
            <div>LOGO</div>
            <DropdownComponent
                options={testOptions}
            />
            <ButtonComponent
                innerText='Registration'
                onClick={() => console.log('Registration')}
            />
            <ButtonComponent
                innerText='Login'
                onClick={() => console.log('Login')}
            />
            <ButtonComponent
                innerText='Bascket'
                onClick={() => console.log('Bascket')}
            />
        </header>
    );
}

export default HeaderComponent;
