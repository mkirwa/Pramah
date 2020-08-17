import React, { Component } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from "material-ui/AppBar";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

class FormUserDetails extends Component {
  handleValidation = () => {
    const {
      firstName,
      lastName,
      streetAddress,
      email,
      apt,
      city,
      state,
      zipCode,
      sSN,
      drivingLicense,
      age,
    } = this.state;
  };

  continue = (e) => {
    e.preventDefault();
    //this is where we will process our forms
    //send the data to the back end platform firebase php blah blah blha
    this.props.nextStep();
  };

  render() {
    //pulling values from the props in continue
    //doing this so you can use values as a variable
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <Dialog open>
          <div className="box-container">
            <div style={style}>
              <TextField
                //error
                //id="filled-error-helper-text"
                //label="error"
                placeholder="Enter Your First Name"
                label="First Name"
                //How react works, everytime the textfield changes
                //everytime we type in it, it will fire off an event
                //of onChange.....You will have firstName in brackets coz
                //handleChange takes in an input
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}
                margin="normal"
                fullWidth
                //HelperText="Incorrect entry"
              />
            </div>

            <div style={style}>
              <TextField
                placeholder="Enter Your Last Name"
                label="Last Name"
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}
                margin="normal"
                fullWidth
              />
            </div>

            <div style={style}>
              <TextField
                placeholder="Enter Your Email"
                label="Email"
                onChange={handleChange("email")}
                defaultValue={values.email}
                margin="normal"
                fullWidth
              />
            </div>
            <br />
            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
          </div>
        </Dialog>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default FormUserDetails;
