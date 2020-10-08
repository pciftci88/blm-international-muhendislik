import React from 'react';
import { useTranslation } from 'react-i18next';

import heshLogo from '../../images/partner/hesh-logo.png';

import { Wrapper, Title, Text } from './OfficialPartner.styles';

function OfficialPartner() {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <Title>{t('Partner.title')}</Title>
            <Text>{t('Partner.text')}</Text>
            <img src={heshLogo} alt='Hesh Logo' title='Hesh Logo' />
        </Wrapper>
    );
}

export default OfficialPartner;