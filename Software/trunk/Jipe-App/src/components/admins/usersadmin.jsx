import React, { Component } from "react";
import NavBarAdmin from "./navbaradmin";
import Users from "../users";

class UsersAdmin extends Component {
  render() {
    return (
      <div>
        <NavBarAdmin />
        <Users />
      </div>
    );
  }
}

export default UsersAdmin;
