import React from 'react';
import { Wrapper, Navi, NaviItem, Logo } from './header.styles';
import logo from '../../images/logos/logo.jpg';
import '@ui5/webcomponents/dist/Button';

function Header() {
    return (
        <Wrapper>
            <Logo src={logo} alt='' title='' />
            <Navi>
                <NaviItem>Home</NaviItem>
                <NaviItem>Produkte & Lieferprogramm</NaviItem>
                <NaviItem>Impressum</NaviItem>
                <NaviItem>Kontakt</NaviItem>
            </Navi>
            <ui5-button>Angebot anfordern</ui5-button>
        </Wrapper>
    );
}

export default Header;
