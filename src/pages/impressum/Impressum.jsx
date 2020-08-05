import React from 'react';
import {
    Wrapper,
    Title,
    ContentBlock
} from './Impressum.styles';

function Impressum() {
    return (
        <Wrapper>
            <ContentBlock>
                <Title>Adresse</Title>
                <p>
                    BLM International Mühendislik<br />
                    Bahçeşehir mah. 86045 sok. No.8 kat.4<br />
                    Adana/Türkiye
                </p>
            </ContentBlock>
            <ContentBlock>
                <Title>Kontakt</Title>
                <p>Sie erreichen unseren Kundenservice montags bis freitags von 9:00 Uhr bis 18:00 Uhr.</p>
                <p>
                    Tel.: 03222563040<br />
                    WhatsApp: 05438645502<br />
                    Skype: blm-muhendislik@outlook.com<br />
                </p>
            </ContentBlock>
            <ContentBlock>
                <p>
                    Geschäftsführung: Benjamin Çiftçi<br />
                    Programmierung: Philipp Çiftçi
                </p>
            </ContentBlock>
        </Wrapper>
    );
}

export default Impressum;