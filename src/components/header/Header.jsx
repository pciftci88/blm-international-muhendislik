import React from 'react';
import { Link } from 'react-router-dom';

import {
    Wrapper,
    Navi,
    NaviItem,
    Logo,
    ContactLink
} from './Header.styles';
import logo from '../../images/logos/logo.jpg';

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Wrapper>
                    <Link to='/'>
                        <Logo src={logo} alt='BLM International Mühendislik' title='BLM Logo' />
                    </Link>
                    <Navi>
                        <NaviItem to='/'>Home</NaviItem>
                        <NaviItem to='/produkte'>Produkte</NaviItem>
                        <NaviItem to='/markenuebersicht'>Marken</NaviItem>
                        <NaviItem to='/impressum'>Impressum</NaviItem>
                        <NaviItem to='/ueber-uns'>Über uns</NaviItem>
                    </Navi>
                    <ui5-button design='Emphasized'>
                        <ContactLink href='mailto:blm-muhendislik@outlook.com' rel='noreferrer noopener' target='_blank'>Angebot anfordern</ContactLink>
                    </ui5-button>
                </Wrapper>
            </React.Fragment>
        )
    }
};

export default Header;
