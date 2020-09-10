import React from 'react';
import { useTranslation } from 'react-i18next';

import {
    Wrapper,
    ContentBlock,
    ContentBlockTitle,
    NamesParagraph
} from './Impressum.styles';

import Teaser from '../../components/teaser/Teaser';

import teaser from '../../images/teaser/impressum.jpg';

import linkedInLogo from '../../images/logos/linkedin-logo.jpg';

function Impressum() {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Teaser teaser={teaser} headline={t('Nav.imprint')} />
            <Wrapper>
                <ContentBlock>
                    <ContentBlockTitle>{t('Imprint.address')}</ContentBlockTitle>
                    <p>
                        BLM International Mühendislik<br />
                        Bahcesehir Mah. 86045 Sok. No.8 Kat.4<br />
                        01200 Seyhan/Adana {t('Imprint.country')}
                    </p>
                </ContentBlock>
                <ContentBlock>
                    <ContentBlockTitle>{t('Imprint.contact')}</ContentBlockTitle>
                    <p>{t('Imprint.opening')}</p>
                    <p>
                        <strong>Tel.:</strong> +903222563040<br />
                        <strong>WhatsApp:</strong> +905438645502<br />
                        <strong>Skype:</strong> info@blm-international.com
                    </p>
                </ContentBlock>
                <ContentBlock>
                    <NamesParagraph>
                        <strong>{t('Imprint.director')}:</strong>&nbsp;Benjamin Çiftçi
                    </NamesParagraph>
                    <NamesParagraph>
                        <strong>{t('Imprint.programming')}:</strong>&nbsp;Philipp Çiftçi
                        <a href='https://www.linkedin.com/in/philipp-ciftci-b14538182/' target='_blank' rel='noopener noreferrer'>
                            <img src={linkedInLogo} alt='LinkedIn Philipp Ciftci' />
                        </a>
                    </NamesParagraph>
                </ContentBlock>
            </Wrapper>
        </React.Fragment>
    );
}

export default Impressum;