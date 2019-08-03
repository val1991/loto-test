import React from 'react';

import HeaderComponent from '../../components/HeaderComponent';
import SliderComponent from '../../components/SliderComponent';
import CardsBlock from '../../components/CardsBlock';
import FooterComponent from '../../components/FooterComponent';

const dataSlider = [
    {
        id: 1,
        title: "title 1",
        src: 'https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2019/cat.jpg'
    },
    {
        id: 2,
        title: "title 2",
        src: 'https://spectator.us/wp-content/uploads/2019/04/Notes-on.jpg'
    },
    {
        id: 3,
        title: "title 3",
        src: 'https://www.litter-robot.com/blog/wp-content/uploads/2018/05/Cat-sniffing-kitten-760x335.jpg'
    },
    {
        id: 4,
        title: "title 4",
        src: 'https://spectator.us/wp-content/uploads/2019/04/Notes-on.jpg'
    },
    {
        id: 5,
        title: "title 5",
        src: 'https://www.litter-robot.com/blog/wp-content/uploads/2018/05/Cat-sniffing-kitten-760x335.jpg'
    },
    {
        id: 6,
        title: "title 6",
        src: 'https://images.unsplash.com/photo-1507984211203-76701d7bb120?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
    },
]

const Root = () => {
    return (
        <div className="App">
            <HeaderComponent />
            <SliderComponent
                dataSlider={dataSlider}
            />
            <CardsBlock />
            <FooterComponent />
        </div>
    );
}

export default Root;
