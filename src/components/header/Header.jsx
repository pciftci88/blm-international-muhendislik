import React from 'react';
import { Link } from 'react-router-dom';

import {
    Wrapper,
    Navi,
    NaviItem,
    Logo,
    ContactLink,
    Contact
} from './Header.styles';
import logo from '../../images/logos/logo.jpg';
import '@ui5/webcomponents-icons/dist/icons/call.js'
import '@ui5/webcomponents-icons/dist/icons/email.js'
import '@ui5/webcomponents/dist/Button';

function Header() {
    return (
        <React.Fragment>
            <Wrapper>
                <Link to='/'>
                    <Logo src={logo} alt='BLM International Mühendislik' title='BLM Logo' />
                </Link>
                <Navi>
                    <NaviItem to="/">Home</NaviItem>
                    <NaviItem to="/produkte">Produkte & Lieferprogramm</NaviItem>
                    <NaviItem to="/impressum">Impressum</NaviItem>
                    <NaviItem to="/kontakt">Kontakt</NaviItem>
                </Navi>
                <Contact>
                    <a href='tel:+913222563040'>
                        <ui5-button icon="call" design="Positive" aria-labelledby="lblCall"></ui5-button>
                    </a>
                    <a href='mailto:blm-muhendislik@outlook.com' rel='noreferrer noopener' target='_blank'>
                        <ui5-button icon="email" design="Positive" aria-labelledby="lblEmail"></ui5-button>
                    </a>
                </Contact>
                <ui5-button design='Emphasized'>
                    <ContactLink to="/kontakt"> Angebot anfordern</ContactLink>
                </ui5-button>
            </Wrapper>
        </React.Fragment>
    );
}

export default Header;
