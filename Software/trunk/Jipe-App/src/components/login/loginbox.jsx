import React, { Component } from "react";
import firebase from "../../config/firebase";

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.submitLogin = this.submitLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }

  submitLogin(e) {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {})
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="inner-container">
        <div className="header">Login</div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              //this is where the problem is. Should not be username
              //but email.
              value={this.state.email}
              onChange={this.handleChange}
              type="text"
              name="email"
              className="login-input"
              placeholder="johndoe@mail.com"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
            />
            <button
              type="button"
              className="login-btn"
              onClick={this.submitLogin.bind(this)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginBox;
