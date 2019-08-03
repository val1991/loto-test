import React from 'react';

import Slider from "react-slick";

import "./styles.scss"

const SliderComponent = ({dataSlider}) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 5000,
        // autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'test-class',
    };

    return (
        <div>
        <h2> Slider</h2>
        <Slider {...settings}>
          {dataSlider.map(image => {
            return (
              <div className="slider-item" key={image.id}>
                <h3>{image.title}</h3>
                <img src={image.src} alt={image.title} />
              </div>
            )
          })}
        </Slider>
      </div>
    );
}

export default SliderComponent;
