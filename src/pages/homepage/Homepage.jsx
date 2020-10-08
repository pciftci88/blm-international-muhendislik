import React from 'react';

import MainSlider from '../../components/main-slider/MainSlider';
import BrandSlider from '../../components/brand-slider/BrandSlider';
import TextBlock from '../../components/textblock/TextBlock';
import OfficialPartner from '../../components/official-partner/OfficialPartner';

class Homepage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <MainSlider />
                <BrandSlider />
                <TextBlock />
                <OfficialPartner />
            </React.Fragment>
        );
    }
}

export default Homepage;