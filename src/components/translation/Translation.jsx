import React from 'react';
import { useTranslation } from 'react-i18next';

import { Wrapper, Flag } from './Translation.styles';

import enFlag from '../../images/flags/english.jpg';
import deFlag from '../../images/flags/german.jpg';

function Translation() {
    const { i18n } = useTranslation();

    function handleClick(lang) {
        i18n.changeLanguage(lang);
        console.log(lang)
    }

    return (
        <Wrapper>
            <Flag onClick={() => handleClick('en')}>
                <img src={enFlag} alt='Change language to english' title='English' />
            </Flag>
            <Flag onClick={() => handleClick('de')}>
                <img src={deFlag} alt='Sprache auf Deutsch' title='Deusch' />
            </Flag>
        </Wrapper>
    );
}

export default Translation;