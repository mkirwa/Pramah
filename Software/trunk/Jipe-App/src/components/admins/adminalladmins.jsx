import React, { Component } from "react";
import NavBarAdmin from "./navbaradmin";
import AllAdmins from "../alladmins";

class AdminAllAdmins extends Component {
  render() {
    return (
      <div>
        <NavBarAdmin />
        <AllAdmins />
      </div>
    );
  }
}

export default AdminAllAdmins;
