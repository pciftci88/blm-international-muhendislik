import React from 'react';

import MainSlider from '../../components/main-slider/MainSlider';
import BrandSlider from '../../components/brand-slider/BrandSlider';

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