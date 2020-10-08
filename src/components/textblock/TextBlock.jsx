import React from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

import { Wrapper, Title, List, ListItem } from './TextBlock.styles';

import productExamples from '../../data/ProductExamples';

function TextBlock() {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <div>
                <Title>{t('Products.hydraulics')}</Title>
                <List>
                    {productExamples.hydraulics.map((value, key) => {
                        return <ListItem key={uuidv4()}>{t('Products.examples.hydraulics.' + key)}</ListItem>;
                    })}
                </List>
            </div>
            <div>
                <Title>{t('Products.pneumatics')}</Title>
                <List>
                    {productExamples.pneumatics.map((value, key) => {
                        return <ListItem key={uuidv4()}>{t('Products.examples.pneumatics.' + key)}</ListItem>;
                    })}
                </List>
            </div>
            <div>
                <Title>{t('Products.automation')}</Title>
                <List>
                    {productExamples.automation.map((value, key) => {
                        return <ListItem key={uuidv4()}>{t('Products.examples.automation.' + key)}</ListItem>;
                    })}
                </List>
            </div>
        </Wrapper>
    );
}

export default TextBlock;