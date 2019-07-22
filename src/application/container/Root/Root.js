import React from 'react';

import HeaderComponent from '../../components/HeaderComponent';
import SliderComponent from '../../components/SliderComponent';
import CardsBlock from '../../components/CardsBlock';
import FooterComponent from '../../components/FooterComponent';

const Root = () => {
    return (
        <div className="App">
            <HeaderComponent />
            <SliderComponent />
            <CardsBlock />
            <FooterComponent />
        </div>
    );
}

export default Root;
