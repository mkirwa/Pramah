import React, { Component } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AppBar from "material-ui/AppBar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <Dialog open>
          <div className="box-container">
            <div style={style}>
              <TextField
                placeholder="Enter Your Street Address"
                label="Street Address"
                //How react works, everytime the textfield changes
                //everytime we type in it, it will fire off an event
                //of onChange.....You will have firstName in brackets coz
                //handleChange takes in an input
                onChange={handleChange("streetAddress")}
                defaultValue={values.streetAddress}
                margin="normal"
                fullWidth
              />
            </div>

            <div style={style}>
              <TextField
                placeholder="Enter Your Apt Number"
                label="Apt"
                onChange={handleChange("apt")}
                defaultValue={values.apt}
                margin="normal"
                fullWidth
              />
            </div>

            <div style={style}>
              <TextField
                placeholder="Enter Your City"
                label="City"
                onChange={handleChange("city")}
                defaultValue={values.city}
                margin="normal"
                fullWidth
              />
            </div>

            <div style={style}>
              <TextField
                placeholder="Enter Your State"
                label="State"
                onChange={handleChange("state")}
                defaultValue={values.state}
                margin="normal"
                fullWidth
              />
            </div>
            <div style={style}>
              <TextField
                placeholder="Zip Code"
                label="Zip Code"
                onChange={handleChange("zipCode")}
                defaultValue={values.zipCode}
                margin="normal"
                fullWidth
              />
            </div>

            <div style={style}>
              <TextField
                placeholder="444-99-6666"
                label="Social Security Number"
                onChange={handleChange("sSN")}
                defaultValue={values.sSN}
                margin="normal"
                fullWidth
              />
            </div>

            <div style={style}>
              <TextField
                placeholder="Enter Your Driving License Number"
                label="Driving License Number"
                //How react works, everytime the textfield changes
                //everytime we type in it, it will fire off an event
                //of onChange.....You will have firstName in brackets coz
                //handleChange takes in an input
                onChange={handleChange("drivingLicense")}
                defaultValue={values.drivingLicense}
                margin="normal"
                fullWidth
              />
            </div>

            <div style={style}>
              <TextField
                placeholder="Enter Your Age"
                label="Age"
                onChange={handleChange("age")}
                defaultValue={values.age}
                margin="normal"
                fullWidth
              />
            </div>

            <div style={style}>
              <Button
                color="primary"
                variant="contained"
                style={styles.button}
                //we put contiue up above and what contiunue does
                //is call the next step of userForm and we do that through
                //props
                onClick={this.continue}
              >
                Continue
              </Button>
            </div>

            <Button
              color="secondary"
              variant="contained"
              style={styles.button}
              onClick={this.back}
            >
              Back
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

export default FormPersonalDetails;
