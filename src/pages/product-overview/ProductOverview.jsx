import React from 'react';
import { useTranslation } from 'react-i18next';
import uuid from "uuid";

import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js";
import "@ui5/webcomponents/dist/TableRow.js";
import "@ui5/webcomponents/dist/TableCell.js";

import {
    Wrapper,
    Title,
    ProductWrapper,
    ProductBlock,
    ProductTitle,
    ProductImagesWrapper,
    ProductListWrapper,
    BrandsBlock,
    LogoWrapper,
    Logo
} from './ProductOverview.styles';

import hydraulik from '../../images/products/hydraulik.jpg';
import pneumatik from '../../images/products/pneumatik.jpg';
import automatisierung from '../../images/products/automatisierung.jpg';
import motoren from '../../images/products/motoren.jpg';
import pumpen from '../../images/products/pumpen.jpg';
import airtecLogo from '../../images/logos/airtec-logo.jpg';
import dyniscoLogo from '../../images/logos/dynisco-logo.jpg';
import endressHauserLogo from '../../images/logos/endress-hauser-logo.jpg';
import haweHydraulicLogo from '../../images/logos/hawe-hydraulic-logo.jpg';
import gefaLogo from '../../images/logos/gefa-logo.jpg';
import schneiderElectricLogo from '../../images/logos/schneider-electric-logo.jpg';
import weberHydraulicsLogo from '../../images/logos/weber-hydraulics-logo.jpg';
import parkerLogo from '../../images/logos/parker-logo.jpg';
import festoLogo from '../../images/logos/festo-logo.jpg';
import skfLogo from '../../images/logos/skf-logo.jpg';
import steimelLogo from '../../images/logos/steimel-logo.jpg';
import witteLogo from '../../images/logos/witte-logo.jpg';

import Teaser from '../../components/teaser/Teaser';

import teaser from '../../images/teaser/production.jpg';

import productList from '../../data/productList';

function ProductOverview() {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Teaser teaser={teaser} headline={t('Teaser.products')} isBackgroundWhite={true} />
            <Wrapper>
                <Title>{t('Products.title')}</Title>
                <ProductWrapper>
                    <ProductBlock>
                        <ProductTitle>{t('Products.hydraulics')}</ProductTitle>
                        <ProductImagesWrapper>
                            <img src={hydraulik} alt={t('Products.hydraulics')} title={t('Products.hydraulics')} />
                        </ProductImagesWrapper>
                    </ProductBlock>
                    <BrandsBlock>
                        <ProductTitle>{t('Products.brands')}</ProductTitle>
                        <LogoWrapper>
                            <Logo src={haweHydraulicLogo} alt='Hawe Hydraulik Logo' title='Hawe Hydraulik Logo' />
                            <Logo src={weberHydraulicsLogo} alt='Weber Hydraulik Logo' title='Weber Hydraulik Logo' />
                            <Logo src={parkerLogo} alt='Parker Logo' title='Parker Logo' />
                        </LogoWrapper>
                    </BrandsBlock>
                </ProductWrapper>
                <ProductWrapper>
                    <ProductBlock>
                        <ProductTitle>{t('Products.pneumatics')}</ProductTitle>
                        <ProductImagesWrapper>
                            <img src={pneumatik} alt={t('Products.pneumatics')} title={t('Products.pneumatics')} />
                        </ProductImagesWrapper>
                    </ProductBlock>
                    <BrandsBlock>
                        <ProductTitle>{t('Products.brands')}</ProductTitle>
                        <LogoWrapper>
                            <Logo src={airtecLogo} alt='Airtec Logo' title='Airtec Logo' />
                            <Logo src={gefaLogo} alt='Gefa Logo' title='Gefa Logo' />
                            <Logo src={festoLogo} alt='Festo Logo' title='Festo Logo' />
                        </LogoWrapper>
                    </BrandsBlock>
                </ProductWrapper>
                <ProductWrapper>
                    <ProductBlock>
                        <ProductTitle>{t('Products.automation')}</ProductTitle>
                        <ProductImagesWrapper>
                            <img src={automatisierung} alt={t('Products.automation')} title={t('Products.automation')} />
                        </ProductImagesWrapper>
                    </ProductBlock>
                    <BrandsBlock>
                        <ProductTitle>{t('Products.brands')}</ProductTitle>
                        <LogoWrapper>
                            <Logo src={endressHauserLogo} alt='Endress Hauser Logo' title='Endress Hauser Logo' />
                            <Logo src={schneiderElectricLogo} alt='Schneider Electric Logo' title='Schneider Electric Logo' />
                            <Logo src={dyniscoLogo} alt='Dynsico Logo' title='Dynisco Logo' />
                        </LogoWrapper>
                    </BrandsBlock>
                </ProductWrapper>
                <ProductWrapper>
                    <ProductBlock>
                        <ProductTitle>{t('Products.motorspumps')}</ProductTitle>
                        <ProductImagesWrapper>
                            <img src={motoren} alt={t('Products.motors')} title={t('Products.motors')} />
                            <img src={pumpen} alt={t('Products.pumps')} title={t('Products.pumps')} />
                        </ProductImagesWrapper>
                    </ProductBlock>
                    <BrandsBlock>
                        <ProductTitle>{t('Products.brands')}</ProductTitle>
                        <LogoWrapper>
                            <Logo src={skfLogo} alt='SKF Logo' title='SKF Logo' />
                            <Logo src={steimelLogo} alt='Steimel Logo' title='Steimel Logo' />
                            <Logo src={witteLogo} alt='Witte Pumps & Technology Logo' title='Witte Pumps & Technology Logo' />
                        </LogoWrapper>
                    </BrandsBlock>
                </ProductWrapper>
                <ProductListWrapper>
                    <ProductTitle>{t('ProductList.title')}</ProductTitle>
                    <ui5-table>
                        <ui5-table-column slot="columns">
                            <span>{t('ProductList.tableColumnProduct')}</span>
                        </ui5-table-column>
                        <ui5-table-column slot="columns">
                            <span>{t('ProductList.tableColumnSupplier')}</span>
                        </ui5-table-column>
                        {
                            productList.map((listItem) => {
                                return listItem.products.map((item) => {
                                    return (
                                        <ui5-table-row key={uuid.v4()}>
                                            <ui5-table-cell>{listItem.supplier}</ui5-table-cell>
                                            <ui5-table-cell>{item}</ui5-table-cell>
                                        </ui5-table-row>
                                    )
                                })
                            })
                        }
                    </ui5-table>
                </ProductListWrapper>
            </Wrapper>
        </React.Fragment >
    );
}

export default ProductOverview;