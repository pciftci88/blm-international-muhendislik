import React from 'react';
import '@ui5/webcomponents/dist/Carousel';
import { } from './main-slider.styles';

import produkte from '../../images/slider/produkte.jpg';
import versand from '../../images/slider/versand.jpg';

function MainSlider() {
    return (
        <ui5-carousel cyclic>
            <img src={produkte} alt="Produkte" />
            <img src={versand} alt="Versand" />
        </ui5-carousel>
    );
}

export default MainSlider;