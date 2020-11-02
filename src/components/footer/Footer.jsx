import React from 'react';
import { HashRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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

function Footer() {
    const copyrightYear = new Date().getFullYear();
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Wrapper>
                <FooterItem>
                    <Title>{t('Nav.about')}</Title>
                    <Paragraph>{t('About.1')}</Paragraph>
                    <Paragraph>{t('About.2')}</Paragraph>
                    <Paragraph>{t('About.3')}</Paragraph>
                    <Paragraph>{t('About.4')}</Paragraph>
                </FooterItem>
                <FooterItem>
                    <Title>{t('Imprint.address')}</Title>
                    <Paragraph>
                        BLM International Mühendislik - Benjamin Çiftçi<br />
                        Bahcesehir Mah. 86045 Sok. No.8 Kat.4<br />
                        01200 Seyhan/Adana {t('Imprint.country')}
                    </Paragraph>
                    <Paragraph>
                        <strong>Tel.:</strong> <ContactLink href='tel:+903222563040'>+903222563040</ContactLink><br />
                        <strong>WhatsApp:</strong> <ContactLink href='https://wa.me/905372073627' rel='noreferrer noopener' target='_blank'>+905372073627</ContactLink><br />
                        <strong>Skype:</strong> <ContactLink href='skype:info@blm-international.com?chat' rel='noreferrer noopener' target='_blank'>info@blm-international.com</ContactLink>
                    </Paragraph>
                </FooterItem>
                <FooterItem>
                    <HashRouter basename="/">
                        <LinkWrapper>
                            <FooterLink to='/'>{t('Nav.home')}</FooterLink>
                            <FooterLink to='/produkte'>{t('Nav.products')}</FooterLink>
                            <FooterLink to='/markenuebersicht'>{t('Nav.brands')}</FooterLink>
                            <FooterLink to='/impressum'>{t('Nav.imprint')}</FooterLink>
                            <FooterLink to='/ueber-uns'>{t('Nav.about')}</FooterLink>
                        </LinkWrapper>
                    </HashRouter>
                </FooterItem>
            </Wrapper>
            <Copyright>&#169; {copyrightYear} BLM International Mühendislik - Benjamin Çiftçi.  {t('Copyright.1')}</Copyright>
        </React.Fragment>
    );
}

export default Footer;
