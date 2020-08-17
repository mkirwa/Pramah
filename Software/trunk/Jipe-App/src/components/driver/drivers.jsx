import React, { Component } from "react";
import NavBarDriver from "./navbardriver";
import FormPersonalDetails from "../userforms/formpersonaldetails";

import UserForm from "../userforms/userform";

class Drivers extends Component {
  render() {
    return (
      <div>
        <NavBarDriver />

        <div style={style}>
          <h4>Driver Details</h4>
        </div>
        <UserForm />
      </div>
    );
  }
}
const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "30px auto",
};

export default Drivers;
