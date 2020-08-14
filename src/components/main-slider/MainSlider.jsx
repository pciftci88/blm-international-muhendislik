import React from 'react';
import { isNil } from 'lodash'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Wrapper, Legend } from './MainSlider.styles';

import slides from '../../data/mainSliderData';

class MainSlider extends React.Component {
    render() {
        return (
            <Wrapper>
                <Carousel
                    autoPlay
                    infiniteLoop
                    swipeable
                    showThumbs={false}
                    showStatus={false}
                >
                    {
                        !isNil(slides) && (
                            slides.map((slide, key) => {
                                return (
                                    <div key={key}>
                                        <img src={slide.src} alt={slide.alt} title={slide.title} />
                                        <Legend href='mailto:info@blm-international.com' rel='noreferrer noopener' target='_blank' className="legend">{slide.legentTitle}</Legend>
                                    </div>
                                )
                            })
                        )
                    };
                </Carousel>
            </Wrapper>
        );
    }

}

export default MainSlider;
