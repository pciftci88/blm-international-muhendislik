import React from 'react';
import { useTranslation } from 'react-i18next';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Wrapper, Legend } from './MainSlider.styles';

import slide1 from '../../images/slider/slide-1.jpg';
import slide2 from '../../images/slider/slide-2.jpg';
import slide3 from '../../images/slider/slide-3.jpg';
import slide4 from '../../images/slider/slide-4.jpg';

function MainSlider() {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <Carousel
                autoPlay
                infiniteLoop
                swipeable
                showThumbs={false}
                showStatus={false}
            >
                <div>
                    <img src={slide1} alt="Hydraulik Produkte" title="Hydraulik Produkte" />
                    <Legend href='mailto:info@blm-international.com' rel='noreferrer noopener' target='_blank' className="legend">{t('Offertext.2')}</Legend>
                </div>
                <div>
                    <img src={slide2} alt="Produktion" title="Produktion" />
                    <Legend href='mailto:info@blm-international.com' rel='noreferrer noopener' target='_blank' className="legend">{t('Offertext.2')}</Legend>
                </div>
                <div>
                    <img src={slide3} alt="Lager" title="Lager" />
                    <Legend href='mailto:info@blm-international.com' rel='noreferrer noopener' target='_blank' className="legend">{t('Offertext.2')}</Legend>
                </div>
                <div>
                    <img src={slide4} alt="Versand" title="Versand" />
                    <Legend href='mailto:info@blm-international.com' rel='noreferrer noopener' target='_blank' className="legend">{t('Offertext.2')}</Legend>
                </div>
            </Carousel>
        </Wrapper>
    );
}

export default MainSlider;
