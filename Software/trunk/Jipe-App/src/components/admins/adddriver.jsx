import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import NavBarAdmin from "./navbaradmin";
import { Button } from "reactstrap";
import UserForm from "../userforms/userform";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import RaisedButton from "material-ui/RaisedButton";

class AddDriver extends Component {
  render() {
    return (
      <div>
        <NavBarAdmin />
        <div style={style}>
          <h4>Add Driver</h4>
        </div>
        <UserForm />
        <div style={style}>
          <MuiThemeProvider>
            <Button
              label="Send Email"
              //makes the button blue
              primary={true}
              //we put contiue up above and what contiunue does
              //is call the next step of userForm and we do that through
              //props
              //onClick it should be sending an email
              //onClick={this.continue}
            />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "30px auto",
};

export default AddDriver;
