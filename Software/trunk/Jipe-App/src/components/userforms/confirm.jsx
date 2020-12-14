import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from "material-ui/AppBar";
import { List, ListItem, ListItemText } from "@material-ui/core/";
//import RaisedButton from "material-ui/RaisedButton"; DON'T Use depracated
import Button from "@material-ui/core/Button";

class Confirm extends Component {
  continue = (e) => {
    //prevent default
    e.preventDefault();
    //this is where you would process your form
    //THIS IS WHERE YOU SEND THE DATA TO THE BACK END
    this.props.nextStep();
  };

  back = (e) => {
    //prevent default
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    //pulling values from the props in continue
    //doing this so you can use values as a variable
    const {
      values: {
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
      },
    } = this.props;
    return (
      <MuiThemeProvider>
        <Dialog open>
          <div className="box-container">
            <React.Fragment>
              <div className="header">Confirm User Data</div>
              <List>
                <ListItem>
                  <ListItemText primary="First Name" secondary={firstName} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Last Name" secondary={lastName} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Email" secondary={email} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Street Address"
                    secondary={streetAddress}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Apartment" secondary={apt} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="City" secondary={city} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="State" secondary={state} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="zipCode" secondary={zipCode} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Social Security Number"
                    secondary={sSN}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Driving License"
                    secondary={drivingLicense}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Age" secondary={age} />
                </ListItem>
              </List>

              <br />
              <div>
                <Button
                  color="secondary"
                  variant="contained"
                  //style={styles.button}
                  //we put contiue up above and what contiunue does
                  //is call the next step of userForm and we do that through
                  //props
                  onClick={this.back}
                >
                  Back
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  //we put contiue up above and what contiunue does
                  //is call the next step of userForm and we do that through
                  //props
                  // style={styles.button}
                  onClick={this.continue}
                >
                  Confirm & Continue
                </Button>
              </div>
              <br />
            </React.Fragment>
          </div>
        </Dialog>
      </MuiThemeProvider>
    );
  }
}

//const styles = {
//button: {
//margin: 15,
//},
//};

export default Confirm;
