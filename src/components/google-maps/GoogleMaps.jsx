import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import { mapStyles, Wrapper } from './GoogleMaps.styles';

class GoogleMaps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 37.030362,
            lng: 35.243369
        }
    }

    render() {
        return (
            <Wrapper>
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 47.444, lng: -122.176 }}
                >
                    <Marker position={{ lat: this.state.lat, lng: this.state.lng }} />
                </Map>
            </Wrapper>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'TOKEN HERE'
})(GoogleMaps);