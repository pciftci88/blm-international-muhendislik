import React from 'react';

import { Contact } from './ContactBlock.styles';

import '@ui5/webcomponents-icons/dist/icons/call.js'
import '@ui5/webcomponents-icons/dist/icons/email.js'
import '@ui5/webcomponents/dist/Button';

function ContactBlock() {
    return (
        <Contact>
            <a href='tel:+913222563040'>
                <ui5-button icon="call" design="Positive" aria-labelledby="lblCall"></ui5-button>
            </a>
            <a href='mailto:blm-muhendislik@outlook.com' rel='noreferrer noopener' target='_blank'>
                <ui5-button icon="email" design="Positive" aria-labelledby="lblEmail"></ui5-button>
            </a>
        </Contact>
    )
}

export default ContactBlock;