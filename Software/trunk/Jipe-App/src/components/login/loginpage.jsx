import React, { Component } from "react";
///check on how imports work in react!!Begin here tomorrow!!

import LoginBox from "./loginbox";
import RegisterBox from "./registerbox";
//import RegisterBox from './registerbox';
//import LoginPage from './loginpage';
//switching from login to register is called toggle

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }
  submitLogin(e) {}
  showLoginBox() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }
  showRegisterBox() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }
  render() {
    return (
      <div>
        <div className="root-container">
          <div className="box-container">
            <div className="box-controller">
              <div
                className="controller"
                onClick={this.showLoginBox.bind(this)}
              >
                Login
              </div>
              <div
                className="controller"
                onClick={this.showRegisterBox.bind(this)}
              >
                Register
              </div>
            </div>
            <div className="box-container">
              {this.state.isLoginOpen && <LoginBox />}
              {this.state.isRegisterOpen && <RegisterBox />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
