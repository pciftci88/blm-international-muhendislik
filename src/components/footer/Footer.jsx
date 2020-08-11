import React from 'react';
import {
    Wrapper,
    FooterItem,
    Title,
    Paragraph,
    FooterLink,
    Copyright,
    LinkWrapper,
    ContactLink
} from './Footer.styles';

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
                            BLM International Mühendislik - Benjamin Çiftçi<br />
                            Bahcesehir Mah. 86045 Sok. No.8 Kat.4<br />
                            01200 Seyhan/Adana Türkiye
                        </Paragraph>
                        <Paragraph>
                            <strong>Tel.:</strong> <ContactLink href='tel:+903222563040'>+903222563040</ContactLink><br />
                            <strong>WhatsApp:</strong> <ContactLink href='https://wa.me/905438645502' rel='noreferrer noopener' target='_blank'>+905438645502</ContactLink><br />
                            <strong>Skype:</strong> <ContactLink href='skype:blm-muhendislik@outlook.com?chat' rel='noreferrer noopener' target='_blank'>blm-muhendislik@outlook.com</ContactLink>
                        </Paragraph>
                    </FooterItem>
                    <FooterItem>
                        <LinkWrapper>
                            <FooterLink to='/'>Home</FooterLink>
                            <FooterLink to='/produkte'>Produkte</FooterLink>
                            <FooterLink to='/markenuebersicht'>Marken</FooterLink>
                            <FooterLink to='/impressum'>Impressum</FooterLink>
                            <FooterLink to='/ueber-uns'>Über uns</FooterLink>
                        </LinkWrapper>
                    </FooterItem>
                </Wrapper>
                <Copyright>&#169; {this.copyrightYear} BLM International Mühendislik - Benjamin Çiftçi.  Alle Inhalte unterliegen unserem Copyright.</Copyright>
            </React.Fragment>
        );
    }
}

export default Footer;
