import React, { Component } from "react";
import FormSearch from "../formsearch";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import firebase from "../../config/firebase";
//import Dropdown from "./dropdown";

class DispatchNavbar extends Component {
  submitLogout(e) {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <Link className="navbar-brand mr-auto mr-lg-0" to="/dispatchs/dispatch">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/dispatchs/dispatchloads">
                Loads<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dispatchs/dispatchusers">
                Drivers
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/dispatchs/dispatchload">
                Dispatch Load
              </Link>
            </li>
          </ul>
        </div>
        <FormSearch
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />
        <button type="button" onClick={this.submitLogout.bind(this)}>
          Sign Out
        </button>
      </nav>
    );
  }
}

export default DispatchNavbar;
//Stateless Functional Component
//const NavBar = ({totalCounters}) =>{
//return (
// <nav className="navbar navbar-light bg-light">
// <a className="navbar-brand" href="#">
// Navbar <span className="badge badge-pill badge-secondary">
//{totalCounters}</span>
//</a>
//</nav>
///);
//};

//export default NavBar;

//<MenuItem value="firstName" primaryText="First Name"/>
//<MenuItem value="lastName" primaryText="Last Name"/>
//<MenuItem value="email" primaryText="Email"/>
//<MenuItem value="password" primaryText="Password"/>

//<Dropdown as={ButtonGroup}>
///////////<Button variant="success">Split Button</Button>

//<Dropdown.Toggle
// split
// variant="success"
// id="dropdown-split-basic"
//  />

//<Dropdown.Menu>
// <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//</Dropdown.Menu>
//</Dropdown>

//import {
//import { Dropdown } from 'dropdown.js';
//import Accountant from './accountant';
//Dropdown,
// DropdownMenu,
//DropdownToggle,
// ButtonGroup,
//// DropdownItem
//} from "reactstrap";
