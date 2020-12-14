import React, { Component } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from "material-ui/AppBar";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Popup from "reactjs-popup";

class FormUserDetails extends Component {
  
  //function that validates that all the fields have been filled
  validate = () => {
    const {values} = this.props;
    let isError = false;
    //Show popup if the first name is empty  
    if (values.firstName.length < 1) {
      isError = true;
      alert('Enter Your First Name');
    }
    //Show popup if the last name is empty 
    if (values.lastName.length < 1) {
      isError = true;
      alert('Enter Your Last Name');
    }
    //Show popup if the email is empty 
    if (values.email.length < 1) {
      isError = true;
      alert('Enter Your Email');
    }
    return isError;
  };

  continue = (e) => {
    e.preventDefault();
    //check for errors if there's no errors, then proceed to the next step
    const err = this.validate();
    if (!err) {
    //this is where we will process our forms
    //send the data to the back end platform firebase php blah blah blha
     this.props.nextStep();
    } 
    
  };

  render() {
    //pulling values from the props in continue
    //doing this so you can use values as a variable
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <Dialog open>
          <div className="box-container">
            <div>
              <TextField
                //error
                //id="standard-error-helper-text"
                //label="Error"
                placeholder="Enter Your First Name"
                label="First Name"
                //How react works, everytime the textfield changes
                //everytime we type in it, it will fire off an event
                //of onChange.....You will have firstName in brackets coz
                //handleChange takes in an input
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}
                error={values.firstName===""}
                //helperText={values === "" ? "Empty!" : ""}
                margin="normal"
                fullWidth
                helperText={values.firstName==""?'Required Field!':' '}
              />
            </div>

            <div>
              <TextField
                placeholder="Enter Your Middle Name"
                label="Middle Name"
                onChange={handleChange("middleName")}
                defaultValue={values.middleName} 
                //{errors.lastName != '' && <span style={{color: "red"}}>{this.state.errors.lastName}</span>}
                margin="normal"
                fullWidth
              />
            </div>

            <div>
              <TextField
                placeholder="Enter Your Last Name"
                label="Last Name"
                onChange={handleChange("lastName")}
                defaultValue={values.lastName} 
                //{errors.lastName != '' && <span style={{color: "red"}}>{this.state.errors.lastName}</span>}
                error={values.lastName===""}
                margin="normal"
                fullWidth
                helperText={values.lastName==""?'Required Field!':' '}
              />
            </div>

            <div>
              <TextField
                placeholder="Enter Your Email"
                label="Email"
                onChange={handleChange("email")}
                defaultValue={values.email}
                error={values.email===""}
                margin="normal"
                fullWidth
                helperText= {values.email==""?'Required Field':' '}
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


export default FormUserDetails;
