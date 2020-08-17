import React, { Component } from "react";
import DispatchNavbar from "./dispatchnavbar";
import UserForm from "../userforms/userform";

class Dispatch extends Component {
  render() {
    return (
      <div>
        <DispatchNavbar />
        <UserForm />
      </div>
    );
  }
}

export default Dispatch;
