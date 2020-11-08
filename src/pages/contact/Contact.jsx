import React, { lazy } from 'react';

import {
    Wrapper,
    ContactBlock,
    ContactNameBlock
} from './Contact.styles';

import "@ui5/webcomponents/dist/Label";
import "@ui5/webcomponents/dist/Input";
import "@ui5/webcomponents/dist/TextArea";

const Teaser = lazy(() => import('../../components/teaser/Teaser'));

const teaser = lazy(() => import('../../images/teaser/contact.jpg'));

class Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Teaser teaser={teaser} headline='Kontakt' />
                <Wrapper>
                    <ContactNameBlock>
                        <ContactBlock>
                            <ui5-label for="firstName" required show-colon>Vorname</ui5-label>
                            <ui5-input id="firstName" aria-required="true" aria-labelledby="firstName" placeholder="Vorname"></ui5-input>
                        </ContactBlock>
                        <ContactBlock>
                            <ui5-label for="lastName" required show-colon>Nachname</ui5-label>
                            <ui5-input id="lastName" aria-required="true" aria-labelledby="lastName" placeholder="Nachname"></ui5-input>
                        </ContactBlock>
                    </ContactNameBlock>
                    <ContactBlock>
                        <ui5-label for="email" required show-colon>E-Mail</ui5-label>
                        <ui5-input id="email" aria-required="true" aria-labelledby="email" placeholder="Ihre E-Mail Adresse"></ui5-input>
                    </ContactBlock>
                    <ContactBlock>
                        <ui5-label for="phone" show-colon>Telefon</ui5-label>
                        <ui5-input id="phone" aria-required="false" aria-labelledby="phone" placeholder="Ihre Telefonnummer"></ui5-input>
                    </ContactBlock>
                    <ContactBlock>
                        <ui5-label for="message" required show-colon>Ihre Anfrage</ui5-label>
                        <ui5-textarea id="message" aria-labelledby="message" aria-required="true" placeholder="Schreiben Sie uns eine Nachricht"></ui5-textarea>
                    </ContactBlock>
                    <ui5-button design='Emphasized'>Anfrage senden</ui5-button>
                </Wrapper>
            </React.Fragment>
        );
    }
}

export default Contact;
