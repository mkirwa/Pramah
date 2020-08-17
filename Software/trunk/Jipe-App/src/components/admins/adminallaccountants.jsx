import React, { Component } from "react";
import NavBarAdmin from "./navbaradmin";
import AllAccountants from "../allaccountants";

class AdminAllAccountants extends Component {
  render() {
    return (
      <div>
        <NavBarAdmin />
        <AllAccountants />
      </div>
    );
  }
}

export default AdminAllAccountants;
