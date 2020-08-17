import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";

const usertypes = [
  { label: "Driver", value: 1 },
  { label: "Admin", value: 2 },
  { label: "Accountant", value: 3 },
  { label: "Dispatch", value: 4 },
];

class RegisterBox extends React.Component {
  //instead of hard coding all the counters in the render method
  //div section,
  //just use an array instead and render them using the map method
  //array will have counter objects
  //add a new property allcomponents
  // Use this to uniquely identify each
  //counter

  submitRegister(e) {}

  render() {
    return (
      <div className="inner-container">
        <div className="header">Register</div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="CompanyCode">Company Code</label>
            <input
              type="text"
              name="CompanyCode"
              className="login-input"
              placeholder="Company Code"
            />
          </div>

          <div className="input-group">
            <Select options={usertypes} />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="login-input"
              placeholder="Email"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password"> Confirm Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Confirm Password"
            />
            <button
              type="button"
              className="login-btn"
              onClick={this.submitRegister.bind(this)}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterBox;
