import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

class Success extends Component {
  render() {
    return (
      <div className="box-container">
        <MuiThemeProvider>
          <React.Fragment>
            <div className="header">Success!</div>
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
export default Success;
