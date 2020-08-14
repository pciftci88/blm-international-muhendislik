import React from 'react';
import { useTranslation } from 'react-i18next';

import {
    Wrapper,
    ContentBlock,
    ContentBlockTitle
} from './Impressum.styles';

import Teaser from '../../components/teaser/Teaser';

import teaser from '../../images/teaser/impressum.jpg';

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
                        01200 Seyhan/Adana Türkiye
                    </p>
                </ContentBlock>
                <ContentBlock>
                    <ContentBlockTitle>{t('Imprint.contact')}</ContentBlockTitle>
                    <p>{t('Imprint.opening')}</p>
                    <p>
                        Tel.: +903222563040<br />
                        WhatsApp: +905438645502<br />
                        Skype: info@blm-international.com
                    </p>
                </ContentBlock>
                <ContentBlock>
                    <p>
                        {t('Imprint.director')}: Benjamin Çiftçi<br />
                        {t('Imprint.programming')}: Philipp Çiftçi
                    </p>
                </ContentBlock>
            </Wrapper>
        </React.Fragment>
    );
}

export default Impressum;