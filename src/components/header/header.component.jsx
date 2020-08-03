import React from 'react';

import { Wrapper, Navi, NaviItem, Logo, ContactLink } from './header.styles';
import logo from '../../images/logos/logo.jpg';
import '@ui5/webcomponents/dist/Button';

function Header() {
    return (
        <Wrapper>
            <Logo src={logo} alt='' title='' />
            <Navi>
                <NaviItem to="/">Home</NaviItem>
                <NaviItem to="/produkte">Produkte & Lieferprogramm</NaviItem>
                <NaviItem to="/impressum">Impressum</NaviItem>
                <NaviItem to="/kontakt">Kontakt</NaviItem>
            </Navi>
            <ui5-button>
                <ContactLink to="/kontakt"> Angebot anfordern</ContactLink>
            </ui5-button>
        </Wrapper>
    );
}

export default Header;
