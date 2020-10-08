import React from 'react';
import { useTranslation } from 'react-i18next';

import {
    Wrapper,
    Letter,
    Title,
    BrandsWrapper
} from './BrandsOverview.styles';

import brandsData from '../../data/brandsOverviewData';

function BrandsOverview() {
    const brands = brandsData[1];
    const { t } = useTranslation();

    return (
        <Wrapper>
            <Title>{t('Teaser.brands')}</Title>
            <BrandsWrapper>
                {
                    brands.map((value, key) => {
                        return <Letter key={key}>{value}</Letter>
                    })
                }
            </BrandsWrapper>
        </Wrapper>
    );
}

export default BrandsOverview;