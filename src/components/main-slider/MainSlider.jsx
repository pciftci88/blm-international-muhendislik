import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Wrapper, Legend } from './MainSlider.styles';

import slide1 from '../../images/slider/slide-1.jpg';
import slide2 from '../../images/slider/slide-2.jpg';
import slide3 from '../../images/slider/slide-3.jpg';
import slide4 from '../../images/slider/slide-4.jpg';

import sliderData from '../../data/mainSliderData';

function MainSlider() {
    const legentTitle = 'Jetzt anfragen';
    sliderData.slides.map((key, index) => {
        return key;
    });

    return (
        <Wrapper>
            <Carousel
                autoPlay
                infiniteLoop
                swipeable
                showThumbs={false}
            >
                <div>
                    <img src={slide1} alt="Slider-Item" />
                    <Legend to="/kontakt" className="legend">{legentTitle}</Legend>
                </div>
                <div>
                    <img src={slide2} alt="Slider-Item" />
                    <Legend to="/kontakt" className="legend">{legentTitle}</Legend>
                </div>
                <div>
                    <img src={slide3} alt="Slider-Item" />
                    <Legend to="/kontakt" className="legend">{legentTitle}</Legend>
                </div>
                <div>
                    <img src={slide4} alt="Slider-Item" />
                    <Legend to="/kontakt" className="legend">{legentTitle}</Legend>
                </div>
            </Carousel>
        </Wrapper>
    );
}

export default MainSlider;
