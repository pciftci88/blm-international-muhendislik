import React from 'react';

import { Wrapper } from './BrandsOverview.styles';

import brandsData from '../../data/brandsOverviewData';

class BrandsOverview extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Wrapper>
                    {
                        // brandsData.map((value, key) => {
                        //     return Object.values(value).map((v, k) => {

                        //     })
                        // })
                    }
                </Wrapper>
            </React.Fragment>
        );
    }
}

export default BrandsOverview;