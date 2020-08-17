import React, { Component } from "react";
import FormSearch from "../formsearch";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import firebase from "../../config/firebase";

class NavBarDriver extends Component {
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
        <Link className="navbar-brand mr-auto mr-lg-0" to="/driver/drivers">
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
              <Link className="nav-link" to="/driver/driverloads">
                Loads<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/driver/driverpaystubs">
                Paystubs
              </Link>
            </li>

            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Receipts
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/driver/card1">
                  Card 1
                </Link>
                <Link class="dropdown-item" to="/driver/card2">
                  Card 2
                </Link>
              </div>
            </li>

            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Bill of Lading
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/driver/departurebol">
                  Departure Bill of Lading
                </Link>
                <Link class="dropdown-item" to="/driver/arrivalbol">
                  Arrival Bill of Lading
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <button type="button" onClick={this.submitLogout.bind(this)}>
          Sign Out
        </button>
      </nav>
    );
  }
}

export default NavBarDriver;
