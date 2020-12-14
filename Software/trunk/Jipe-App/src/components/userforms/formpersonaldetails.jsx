import React, { Component } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AppBar from "material-ui/AppBar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Select from "react-select";
import MenuItem from '@material-ui/core/MenuItem';

const states = [
  { label: "Alaska", value: 1 },
  { label: "Alabama", value: 2 },
  { label: "Arizona", value: 3 },
  { label: "Arkansas", value: 4 },
  { label: "California", value: 5 },
  { label: "Colorado", value: 6 },
  { label: "Connecticut ", value: 7 },
  { label: "Delaware", value: 8 },
  { label: "Florida", value: 9 },
  { label: "Georgia", value: 10 },
  { label: "Hawaii ", value: 11 },
  { label: "Idaho", value: 12 },
  { label: "Illinois", value: 13 },
  { label: "Indiana", value: 14 },
  { label: "Iowa", value: 15 },
  { label: "Kansas", value: 16 },
  { label: "Kentucky", value: 17 },
  { label: "Louisiana", value: 18 },
  { label: "Maine", value: 19 },
  { label: "Maryland", value: 20 },
  { label: "Massachusetts", value: 21 },
  { label: "Michigan", value: 22 },
  { label: "Minnesota", value: 23 },
  { label: "Mississippi", value: 24 },
  { label: "Missouri", value: 25 },
  { label: "Montana", value: 26 },
  { label: "Nebraska", value: 27 },
  { label: "Nevada", value: 28 },
  { label: "New Hampshire", value: 29 },
  { label: "New Jersey", value: 30 },
  { label: "New Mexico", value: 31 },
  { label: "New York", value: 32 },
  { label: "North Carolina", value: 33 },
  { label: "North Dakota", value: 34 },
  { label: "Ohio", value: 35 },
  { label: "Oregon", value: 36 },
  { label: "Oklahoma", value: 37 },
  { label: "Pennsylvania", value: 38 },
  { label: "Rhode Island", value: 39 },
  { label: "South Carolina", value: 40 },
  { label: "South Dakota", value: 41 },
  { label: "Tennessee", value: 42 },
  { label: "Texas", value: 43 },
  { label: "Utah", value: 44 },
  { label: "Vermont", value: 45 },
  { label: "Virginia", value: 46 },
  { label: "Washington", value: 47 },
  { label: "West Virginia", value: 48 },
  { label: "Wisconsin", value: 49 },
  { label: "Wyoming", value: 50 },
  { label: "State", value: 51 }
];

class FormPersonalDetails extends Component {
  
  validate = () => {
    const {values} = this.props;

    let isError = false;
    //Show popup if the first name is empty  
    if (values.streetAddress.length < 1) {
      isError = true;
      alert('Enter Your Street Address Name');
    }
    //Show popup if the last name is empty 
    if (isNaN(values.apt)) {
      isError = true;
      alert('Please Enter a Number for Apartment Number');
    }
    if (values.apt>10000||values.apt<1) {
      isError = true;
      alert('Apartment Number is too large or empty');
    }
    //Show popup if the City is empty 
    if (values.city.length < 1) {
      isError = true;
      alert('Enter Your City');
    }
    if (states.length < 1) {
      isError = true;
      alert('State cannot be empty');
    }
    if (isNaN(values.zipCode)) {
      isError = true;
      alert('Please Enter a Number for Zip Code Number');
    }
    
    if (values.sSN.length < 1) {
      isError = true;
      alert('Enter Your Social Security Number');
    }
    if (isNaN(values.drivingLicense)) {
      isError = true;
      alert('Please enter a number for your driving license');
    }
    if (isNaN(values.age)|| values.age<15 || values.age>120) {
      isError = true;

      if(isNaN(values.age)){
        alert('Age should be a number');
      }
      if(values.age<15){
        alert('Age cannot be less than 15');
      }
      if(values.age>120){
        alert('Age cannot be greater than 120')
      }
  
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
    } else {
      console.log("here")
    }
    
  };
  

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  continues = (e) => {
    e.preventDefault();
    //check for errors if there's no errors, then proceed to the next step
    const err = this.validate();
    if (!err) {
    //this is where we will process our forms
    //send the data to the back end platform firebase php blah blah blha
     this.props.nextStep();
    } 
    //else {
      //console.log("here")
    //}
    
  };

  render() {
    const { values, handleChange} = this.props;
    //const {values,states} = this.props;

    return (
      <MuiThemeProvider>
        <Dialog open>
          <div className="box-container">
            <div>
              <TextField
                placeholder="Enter Your Street Address"
                label="Street Address"
                //How react works, everytime the textfield changes
                //everytime we type in it, it will fire off an event
                //of onChange.....You will have firstName in brackets coz
                //handleChange takes in an input
                onChange={handleChange("streetAddress")}
                defaultValue={values.streetAddress}
                error={values.streetAddress===""}
                margin="normal"
                fullWidth
                helperText={values.streetAddress==""?'Required Field!':' '}
              />
            </div>
            

            <div>
              <TextField
                placeholder="Enter Your Apt Number"
                label="Apt"
                onChange={handleChange("apt")}
                defaultValue={values.apt}
                margin="normal"
                fullWidth
              />
            </div>

            <div>
              <TextField
                placeholder="Enter Your City"
                label="City"
                onChange={handleChange("city")}
                defaultValue={values.city}
                error={values.city===""}
                margin="normal"
                fullWidth
                helperText={values.city==""?'Required Field!':' '}
              />
            </div>
            <div>
            <TextField
                  //id="standard-select-currency"
                  placeholder="Select State"
                  select
                  label="states"
                  defaultValue={states.label}
                  value={states.label}
                  onChange={handleChange(states.label)}
                  fullWidth
                  helperText="Please select your state"
            >
                  {states.map((option) => (
                    <MenuItem key={option.label} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
            </TextField>
            </div>
            <div>
         
            
            </div>
            <div>
              <TextField
                placeholder="Zip Code"
                label="Zip Code"
                onChange={handleChange("zipCode")}
                defaultValue={values.zipCode}
                error={values.zipCode===""}
                margin="normal"
                fullWidth
                helperText={values.zipCode==""?'Required Field!':' '}
              />
            </div>

            <div>
              <TextField
                placeholder="444-99-6666"
                label="Social Security Number"
                onChange={handleChange("sSN")}
                defaultValue={values.sSN}
                error={values.sSN===""}
                margin="normal"
                fullWidth
                helperText={values.sSN==""?'Required Field!':' '}
              />
            </div>

            <div>
              <TextField
                placeholder="Enter Your Driving License Number"
                label="Driving License Number"
                //How react works, everytime the textfield changes
                //everytime we type in it, it will fire off an event
                //of onChange.....You will have firstName in brackets coz
                //handleChange takes in an input
                onChange={handleChange("drivingLicense")}
                defaultValue={values.drivingLicense}
                error={values.drivingLicense===""}
                margin="normal"
                fullWidth
                helperText={values.drivingLicense==""?'Required Field!':' '}
              />
            </div>

            <div>
              <TextField
                placeholder="Enter Your Age"
                label="Age"
                onChange={handleChange("age")}
                defaultValue={values.age}
                error={values.age===""}
                margin="normal"
                fullWidth
                helperText={values.age==""?'Required Field!':' '}
              />
            </div>

            <div>
              <Button
                className="divider"
                color="secondary"
                variant="contained"
                //style={styles.button}
                onClick={this.back}
              >
                Back
              </Button>
              <Button
                color="primary"
                variant="contained"
                //style={styles.button}
                //we put contiue up above and what contiunue does
                //is call the next step of userForm and we do that through
                //props
                onClick={this.continue}
              >
                Continue
              </Button>
            </div>
          </div>
        </Dialog>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;

//<div className="input-group">
             // <Select options={states} />
//</div>

//<div className="input-group">
  //<Select options={states} />
//</div> 
  