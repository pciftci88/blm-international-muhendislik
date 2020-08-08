import React from 'react';

import { Wrapper, Title } from './Teaser.styles';

function Teaser({ teaser, headline, isBackgroundWhite }) {
    return (
        <Wrapper>
            <Title isBackgroundWhite={isBackgroundWhite}>{headline}</Title>
            <img src={teaser} alt={headline} title={headline} />
        </Wrapper>
    );
}

export default Teaser;