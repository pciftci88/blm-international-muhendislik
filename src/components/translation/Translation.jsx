import React from 'react';
import { useTranslation } from 'react-i18next';

import { Wrapper, Flag } from './Translation.styles';

import enFlag from '../../images/flags/english.jpg';
import deFlag from '../../images/flags/german.jpg';
import trFlag from '../../images/flags/turkish.jpg';

function Translation() {
    const { i18n } = useTranslation();

    function handleClick(lang) {
        i18n.changeLanguage(lang);
    }

    return (
        <Wrapper>
            <Flag onClick={() => handleClick('en')}>
                <img src={enFlag} alt='English' title='English' />
            </Flag>
            <Flag onClick={() => handleClick('de')}>
                <img src={deFlag} alt='Deutsch' title='Deusch' />
            </Flag>
            <Flag onClick={() => handleClick('tr')}>
                <img src={trFlag} alt='Türkçe' title='Türkçe' />
            </Flag>
        </Wrapper>
    );
}

export default Translation;