import React, { lazy } from 'react';
import { useTranslation } from 'react-i18next';

import {
    Wrapper,
    Title,
    Paragraph,
    ContentTitle,
    ContentSubTitle
} from './About.styles';

import teaser from '../../images/teaser/about.jpg';

const Teaser = lazy(() => import('../../components/teaser/Teaser'));

function About() {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Teaser teaser={teaser} headline={t('Teaser.about')} isBackgroundWhite={true} />
            <Wrapper>
                <Title>{t('Nav.about')}</Title>
                <ContentTitle>{t('About.title')}</ContentTitle>
                <ContentSubTitle>{t('About.subtitle')}</ContentSubTitle>
                <Paragraph>{t('About.1')}</Paragraph>
                <Paragraph>{t('About.2')}</Paragraph>
                <Paragraph>{t('About.3')}</Paragraph>
            </Wrapper>
        </React.Fragment>
    );
}

export default About;