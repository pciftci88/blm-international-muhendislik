import React from 'react';

import MainSlider from '../../components/main-slider/main-slider.component';
import BrandSlider from '../../components/brand-slider/brand-slider.component';

class Homepage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <MainSlider />
                <BrandSlider />
            </React.Fragment>
        );
    }
}

export default Homepage;