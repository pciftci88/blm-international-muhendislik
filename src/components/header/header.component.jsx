import React from 'react';

import { Wrapper, Logo } from './header.styles';

import logo from '../../images/logos/logo.jpg';

import '@ui5/webcomponents/dist/Button';

function Header() {
    return (
        <Wrapper>
            <Logo src={logo} alt='' title='' />
            <div>
                <span>Home</span>
                <span>Produkte & Lieferprogramm</span>
                <span>Impressum</span>
            </div>
            <ui5-button>Angebot anfordern</ui5-button>
        </Wrapper>
    );
}

export default Header;