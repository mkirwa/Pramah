import React, { Component } from "react";
import NavBarAdmin from "./navbaradmin";
import UserForm from "../userforms/userform";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import RaisedButton from "material-ui/RaisedButton";
import { Button } from "reactstrap";

class AddAccountant extends Component {
  render() {
    return (
      <div>
        <NavBarAdmin />
        <div style={style}>
          <h4>Add Accountant</h4>
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

export default AddAccountant;
