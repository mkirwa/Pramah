import React, { Component } from "react";
import NavBarAdmin from "./navbaradmin";
import Dispatchers from "../dispatchers";

class AdminAllDispatch extends Component {
  render() {
    return (
      <div>
        <NavBarAdmin />
        <Dispatchers />
      </div>
    );
  }
}

export default AdminAllDispatch;
