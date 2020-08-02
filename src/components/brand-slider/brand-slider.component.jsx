import React from 'react';
import '@ui5/webcomponents/dist/Carousel';

import { Wrapper, Title } from './brand-slider.styles';

import dyniscoLogo from '../../images/logos/dynisco-logo.jpg';
import endressHauserLogo from '../../images/logos/endress-hauser-logo.jpg';
import haweHydraulicLogo from '../../images/logos/hawe-hydraulic-logo.jpg';
import seepexLogo from '../../images/logos/seepex-logo.jpg';
import bucherHydraulicsLogo from '../../images/logos/bucher-hydraulics-logo.jpg'
import gestraLogo from '../../images/logos/gestra-logo.jpg';
import hydacVectorLogo from '../../images/logos/hydac-vector-logo.jpg';
import schneiderElectricLogo from '../../images/logos/schneider-electric-logo.jpg';

class BrandSlider extends React.Component {
    render() {
        return (
            <Wrapper>
                <Title>Unsere Partner</Title>
                <ui5-carousel
                    items-per-page-s="1"
                    items-per-page-m="3"
                    items-per-page-l="5"
                    cyclic
                >
                    <img src={dyniscoLogo} alt="Dynisco" />
                    <img src={endressHauserLogo} alt="Endress Hauser" />
                    <img src={haweHydraulicLogo} alt="Hawe Hydraulic" />
                    <img src={seepexLogo} alt="Seepex" />
                    <img src={bucherHydraulicsLogo} alt="Bucher Hydraulics" />
                    <img src={gestraLogo} alt="Gestra" />
                    <img src={hydacVectorLogo} alt="Hycac Vector" />
                    <img src={schneiderElectricLogo} alt="Schneider Electric" />
                </ui5-carousel>
            </Wrapper >
        );
    }
}

export default BrandSlider;
