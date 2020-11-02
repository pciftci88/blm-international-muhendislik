import React from 'react';

import { Contact, WhatsAppIcon } from './ContactBlock.styles';

import '@ui5/webcomponents-icons/dist/icons/call.js'
import '@ui5/webcomponents-icons/dist/icons/email.js'
import '@ui5/webcomponents/dist/Button';

import whatsApp from '../../images/contact/whatsapp-icon.png';

function ContactBlock() {
    return (
        <Contact>
            <a href='tel:+903222563040' title="Phone">
                <ui5-button icon="call" design="Positive" aria-labelledby="lblCall"></ui5-button>
            </a>
            <WhatsAppIcon href='https://wa.me/905372073627'>
                <img src={whatsApp} title="WhatsApp" alt="Contact on WhatsApp" />
            </WhatsAppIcon>
            <a href='mailto:info@blm-international.com' rel='noreferrer noopener' target='_blank' title="EMail">
                <ui5-button icon="email" design="Positive" aria-labelledby="lblEmail"></ui5-button>
            </a>
        </Contact>
    )
}

export default ContactBlock;