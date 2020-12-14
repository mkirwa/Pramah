import React, { Component } from "react";
import DispatchNavbar from "./dispatchnavbar";
import UserForm from "../userforms/userform";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Maps from "../maps/MapContainer"

class Dispatch extends Component {
  render() {
    return (
      <div>
        <DispatchNavbar />
        <Maps/>
      </div>
    );
  }
}
export default Dispatch;
//bring back the UserForm when everything is ready
//<UserForm />
// AIzaSyB8vhwJmVSKRYg_ZHdeYyAFWUYZDqod6N8