import React from 'react';
import { useTranslation } from 'react-i18next';
import '@ui5/webcomponents/dist/Carousel';
import { isNil } from 'lodash';

import { Wrapper, Title } from './BrandSlider.styles';

import logos from '../../data/logos';

function BrandSlider() {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <Title>{t('Brandslider.title')}</Title>
            <ui5-carousel
                items-per-page-s="1"
                items-per-page-m="3"
                items-per-page-l="5"
                cyclic
            >
                {
                    !isNil(logos) && (
                        logos.map((value, key) => {
                            return (
                                <img key={key} src={value.src} alt={value.alt} title={value.title} />
                            );
                        })
                    )
                }
            </ui5-carousel>
        </Wrapper >
    );
}

export default BrandSlider;
