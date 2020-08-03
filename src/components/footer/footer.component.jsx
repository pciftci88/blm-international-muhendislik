import React from 'react';
import {
    Wrapper,
    FooterItem,
    Title,
    Paragraph,
    Link,
    Copyright
} from './footer.styles';

class Footer extends React.Component {
    constructor() {
        super();
        this.copyrightYear = new Date().getFullYear();
    }

    render() {
        return (
            <React.Fragment>
                <Wrapper>
                    <FooterItem>
                        <Title>Über Uns</Title>
                        <Paragraph>BLM International Mühendislik spezialisiert sich auf die Lieferung von Ersatzteilen und Maschinen.</Paragraph>
                        <Paragraph>Unsere Produkte sind für den Industriebereich in aller Welt.</Paragraph>
                        <Paragraph>Bei uns erhalten Sie Ersatzteile oder Neuprodukte, je nach Bedarf. In unserem Sortimen finden Sie Hydraulik, Pneumatik oder Automatisierungsprodukte.</Paragraph>
                    </FooterItem>
                    <FooterItem>
                        <Title>Adresse</Title>
                        <Paragraph>
                            BLM International Mühendislik<br />
                        Bahçeşehir mah. 86045 sok. No.8 kat.4<br />
                        Adana/Türkiye
                    </Paragraph>
                        <Paragraph>
                            <strong>Tel.:</strong> 03222563040<br />
                            <strong>WhatsApp:</strong> 05438645502<br />
                            <strong>Skype:</strong> blm-muhendislik@outlook.com
                    </Paragraph>
                    </FooterItem>
                    <FooterItem>
                        <div>
                            <Link>Home</Link>
                            <Link>Produkte & Lieferprogramm</Link>
                            <Link>Impressum</Link>
                            <Link>Kontakt</Link>
                        </div>
                    </FooterItem>
                </Wrapper>
                <Copyright>&#169; {this.copyrightYear} BLM International Mühendislik.  Alle Inhalte unterliegen unserem Copyright.</Copyright>
            </React.Fragment>
        );
    }
}

export default Footer;
