import React from 'react';
import {
    Wrapper,
    ContentBlock,
    ContentBlockTitle
} from './Impressum.styles';

import Teaser from '../../components/teaser/Teaser';

import teaser from '../../images/teaser/impressum.jpg';

function Impressum() {
    return (
        <React.Fragment>
            <Teaser teaser={teaser} headline='Impressum' />
            <Wrapper>
                <ContentBlock>
                    <ContentBlockTitle>Adresse</ContentBlockTitle>
                    <p>
                        BLM International Mühendislik<br />
                        Bahcesehir Mah. 86045 Sok. No.8 Kat.4<br />
                        01200 Seyhan/Adana Türkiye
                    </p>
                </ContentBlock>
                <ContentBlock>
                    <ContentBlockTitle>Kontakt</ContentBlockTitle>
                    <p>Sie erreichen unseren Kundenservice montags bis freitags von 9:00 Uhr bis 18:00 Uhr.</p>
                    <p>
                        Tel.: +903222563040<br />
                        WhatsApp: +905438645502<br />
                        Skype: info@blm-international.com
                    </p>
                </ContentBlock>
                <ContentBlock>
                    <p>
                        Geschäftsführung: Benjamin Çiftçi<br />
                        Programmierung: Philipp Çiftçi
                    </p>
                </ContentBlock>
            </Wrapper>
        </React.Fragment>
    );
}

export default Impressum;