import React from 'react';
import { useTranslation } from 'react-i18next';

import { Wrapper, Title, Paragraph } from './About.styles';

import Teaser from '../../components/teaser/Teaser';

import teaser from '../../images/teaser/about.jpg';

function About() {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Teaser teaser={teaser} headline={t('Teaser.about')} isBackgroundWhite={true} />
            <Wrapper>
                <Title>{t('Nav.about')}</Title>
                <Paragraph>{t('About.1')}</Paragraph>
                <Paragraph>{t('About.2')}</Paragraph>
                <Paragraph>{t('About.3')}</Paragraph>
                <Paragraph>{t('About.4')}</Paragraph>
            </Wrapper>
        </React.Fragment>
    );
}

export default About;