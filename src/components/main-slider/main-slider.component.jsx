import React from 'react';
import { Link } from 'react-router-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Wrapper } from './main-slider.styles';

import slide1 from '../../images/slider/slide-1.jpg';
import slide2 from '../../images/slider/slide-2.jpg';
import slide3 from '../../images/slider/slide-3.jpg';

function MainSlider() {
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
                    <Link to="/kontakt" className="legend">Zum Kontaktformular</Link>
                </div>
                <div>
                    <img src={slide2} alt="Slider-Item" />
                    <Link to="/kontakt" className="legend">Zum Kontaktformular</Link>
                </div>
                <div>
                    <img src={slide3} alt="Slider-Item" />
                    <Link to="/kontakt" className="legend">Zum Kontaktformular</Link>
                </div>
            </Carousel>
        </Wrapper>
    );
}

export default MainSlider;
