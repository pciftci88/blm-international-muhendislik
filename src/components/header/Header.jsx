import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
    Wrapper,
    Navi,
    NaviItem,
    Logo,
    ContactLink
} from './Header.styles';
import logo from '../../images/logos/logo.jpg';

import Translation from '../../components/translation/Translation';

function Header() {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Wrapper>
                <Link to='/'>
                    <Logo src={logo} alt='BLM International Mühendislik' title='BLM Logo' />
                </Link>
                <Navi>
                    <NaviItem to='/'>{t('Nav.home')}</NaviItem>
                    <NaviItem to='/produkte'>{t('Nav.products')}</NaviItem>
                    <NaviItem to='/markenuebersicht'>{t('Nav.brands')}</NaviItem>
                    <NaviItem to='/impressum'>{t('Nav.imprint')}</NaviItem>
                    <NaviItem to='/ueber-uns'>{t('Nav.about')}</NaviItem>
                </Navi>
                <Translation />
                <ui5-button design='Emphasized'>
                    <ContactLink href='mailto:info@blm-international.com' rel='noreferrer noopener' target='_blank'>{t('Offertext.1')}</ContactLink>
                </ui5-button>
            </Wrapper>
        </React.Fragment>
    )
};

export default Header;
