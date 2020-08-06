import React from 'react';

import { Wrapper, Title, Paragraph } from './About.styles';

function About() {
    return (
        <Wrapper>
            <Title>Über Uns</Title>
            <Paragraph>BLM International Mühendislik spezialisiert sich auf die Lieferung von Ersatzteilen und Maschinen.</Paragraph>
            <Paragraph>Unsere Produkte sind für den Industriebereich in aller Welt.</Paragraph>
            <Paragraph>Bei uns erhalten Sie Ersatzteile oder Neuprodukte, je nach Bedarf. In unserem Sortimen finden Sie Hydraulik, Pneumatik oder Automatisierungsprodukte.</Paragraph>
        </Wrapper>
    );
}

export default About;