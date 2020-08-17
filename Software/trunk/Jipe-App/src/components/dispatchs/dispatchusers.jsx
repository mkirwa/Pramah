import React, { Component } from "react";
import DispatchNavbar from "./dispatchnavbar";
import Users from "../users";

class DispatchUsers extends Component {
  render() {
    return (
      <div>
        <DispatchNavbar />
        <Users />
      </div>
    );
  }
}

export default DispatchUsers;
