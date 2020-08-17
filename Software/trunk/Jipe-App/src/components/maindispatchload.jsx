import React, { Component } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "reactstrap";
import AppBar from "material-ui/AppBar";

class MainDispatchLoad extends Component {
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <div style={styles}>
          <h5>Pick Up Address</h5>
        </div>
        <div className="box-container">
          <React.Fragment>
            <TextField
              placeholder="Company name"
              label="Company Name"
              //How react works, everytime the textfield changes
              //everytime we type in it, it will fire off an event
              //of onChange.....You will have firstName in brackets coz
              //handleChange takes in an input
              //onChange={this.handleChange.bind(this)("Company Name")}
              //defaultValue={values.companyName}
              margin="normal"
              fullWidth
            />

            <TextField
              placeholder="Enter Pick Up Street Address"
              label="Street Address"
              //How react works, everytime the textfield changes
              //everytime we type in it, it will fire off an event
              //of onChange.....You will have firstName in brackets coz
              //handleChange takes in an input
              //onChange={this.handleChange("bio")}
              //defaultValue={values.bio}
              margin="normal"
              fullWidth
            />

            <TextField
              placeholder="Enter Suite Number"
              label="Suite Number"
              //How react works, everytime the textfield changes
              //everytime we type in it, it will fire off an event
              //of onChange.....You will have firstName in brackets coz
              //handleChange takes in an input
              //onChange={this.handleChange("bio")}
              //defaultValue={values.bio}
              margin="normal"
              fullWidth
            />

            <TextField
              placeholder="Enter Pick Up City"
              label="City"
              //How react works, everytime the textfield changes
              //everytime we type in it, it will fire off an event
              //of onChange.....You will have firstName in brackets coz
              //handleChange takes in an input
              //onChange={this.handleChange("bio")}
              //defaultValue={values.bio}
              margin="normal"
              fullWidth
            />

            <TextField
              placeholder="Enter Pick Up State"
              label="State"
              //How react works, everytime the textfield changes
              //everytime we type in it, it will fire off an event
              //of onChange.....You will have firstName in brackets coz
              //handleChange takes in an input
              //onChange={this.handleChange("bio")}
              //defaultValue={values.bio}
              margin="normal"
              fullWidth
            />

            <TextField
              placeholder="Zip Code"
              label="Zip Code"
              //How react works, everytime the textfield changes
              //everytime we type in it, it will fire off an event
              //of onChange.....You will have firstName in brackets coz
              //handleChange takes in an input
              //onChange={this.handleChange("bio")}
              //defaultValue={values.bio}
              margin="normal"
              fullWidth
            />

            <div style={styles}>
              <h5>Drop of Address</h5>
            </div>
            <div style={style}>
              <TextField
                placeholder="Company name"
                label="Company Name"
                //How react works, everytime the textfield changes
                //everytime we type in it, it will fire off an event
                //of onChange.....You will have firstName in brackets coz
                //handleChange takes in an input
                //onChange={handleChange("occupation")}
                //defaultValue={values.occupation}
                margin="normal"
                fullWidth
              />
            </div>
            <div>
              <h4></h4>
            </div>

            <div style={style}>
              <TextField
                placeholder="Enter Company Drop Off Street Address"
                label="Street Address"
                //How react works, everytime the textfield changes
                //everytime we type in it, it will fire off an event
                //of onChange.....You will have firstName in brackets coz
                //handleChange takes in an input
                //onChange={this.handleChange("bio")}
                //defaultValue={values.bio}
                margin="normal"
                fullWidth
              />
            </div>

            <div style={style}>
              <TextField
                placeholder="Enter Drop Off Suite Number"
                label="Suite Number"
                //How react works, everytime the textfield changes
                //everytime we type in it, it will fire off an event
                //of onChange.....You will have firstName in brackets coz
                //handleChange takes in an input
                //onChange={this.handleChange("bio")}
                //defaultValue={values.bio}
                margin="normal"
                fullWidth
              />
            </div>

            <div style={style}>
              <TextField
                placeholder="Enter Drop Off City"
                label="City"
                //How react works, everytime the textfield changes
                //everytime we type in it, it will fire off an event
                //of onChange.....You will have firstName in brackets coz
                //handleChange takes in an input
                //onChange={this.handleChange("bio")}
                //defaultValue={values.bio}
                margin="normal"
                fullWidth
              />
            </div>

            <div style={style}>
              <TextField
                placeholder="Enter Drop Off State"
                label="State"
                //How react works, everytime the textfield changes
                //everytime we type in it, it will fire off an event
                //of onChange.....You will have firstName in brackets coz
                //handleChange takes in an input
                //onChange={this.handleChange("bio")}
                //defaultValue={values.bio}
                margin="normal"
                fullWidth
              />
            </div>

            <div style={style}>
              <TextField
                placeholder="Zip Code"
                label="Zip Code"
                //How react works, everytime the textfield changes
                //everytime we type in it, it will fire off an event
                //of onChange.....You will have firstName in brackets coz
                //handleChange takes in an input
                //onChange={this.handleChange("bio")}
                //defaultValue={values.bio}
                margin="normal"
                fullWidth
              />
            </div>

            <div style={styles}>
              <Button
                //we put contiue up above and what contiunue does
                //is call the next step of userForm and we do that through
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
              //we put contiue up above and what contiunue does
              //is call the next step of userForm and we do that through
              //props
              onClick={this.back}
            >
              Back
            </Button>
          </React.Fragment>
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  margin: "30px auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default MainDispatchLoad;
