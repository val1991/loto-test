import React from 'react';

import Slider from "react-slick";

import "./styles.scss"

const SliderComponent = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 5000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'test-class',
    };

    return (
        <div>
        <h2> Slider</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
}

export default SliderComponent;
