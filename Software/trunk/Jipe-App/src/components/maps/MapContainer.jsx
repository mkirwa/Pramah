import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 39.7452, lng: -104.9922}}
          >
            <Marker position={{ lat: 39.7452, lng: -104.9922}} />
        </Map>
      </div>
    );
  }
}

const mapStyles = {
  width: '100%',
  height: '100%',
};
export default GoogleApiWrapper({
    apiKey:"AIzaSyAF8Sp_uEYoUX1RZLDtfzIZ7w0Raqj1dwU"
    })(MapContainer);;
//bring back the UserForm when everything is ready
//<UserForm />
// AIzaSyB8vhwJmVSKRYg_ZHdeYyAFWUYZDqod6N8