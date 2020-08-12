import React from 'react';

import {
    Wrapper,
    Letter,
    Title,
    BrandsWrapper
} from './BrandsOverview.styles';

import brandsData from '../../data/brandsOverviewData';

class BrandsOverview extends React.Component {
    constructor(props) {
        super(props);
        this.alphabet = brandsData[0];
        this.brands = brandsData[1];
    }
    render() {
        return (
            <React.Fragment>
                <Wrapper>
                    <Title>Unsere Marken</Title>
                    <BrandsWrapper>
                        {
                            this.brands.map((value, key) => {
                                return <Letter key={key}>{value}</Letter>
                            })
                        }
                    </BrandsWrapper>
                </Wrapper>
            </React.Fragment>
        );
    }
}

export default BrandsOverview;