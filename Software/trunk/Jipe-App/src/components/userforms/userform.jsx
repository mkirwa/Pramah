import React, { Component } from "react";
import Loads from "../loads";
import FormUserDetails from "./formuserdetails";
import FormPersonalDetails from "./formpersonaldetails";
import Confirm from "./confirm";
import Success from "./success";

class UserForm extends Component {
  //Reorganize this to make sure that
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    streetAddress: "",
    apt: "",
    city: "",
    state: "",
    zipCode: "",
    sSN: "",
    drivingLicense: "",
    age: ""
    
    /*error: {
      firstName: "",
      lastName: "",
      email: "",
      streetAddress: "",
      apt: "",
      city: "",
      state: "",
      zipCode: "",
      sSN: "",
      drivingLicense: "",
      age: "",
    },*/
  };

  //has a method to proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //handle fields change
  //each input will have their own state which would be the firstName etc
  //event parameter attached to it
  handleChange = (input) => (e) => {
    //take whatever the input is
    //set it to whatever the value is
    //we can get that using the event parameter and using target.value
    //be it firstName, lastName, whatever value is entered
    this.setState({ [input]: e.target.value });
  };

  /* handleValidation = () => {
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
  };*/

  //figure out what
  //step we are on and depending on what step we are on
  //that's going to decide on which component we want to display
  render() {
    //pull the step out of the state by destructuring
    const { step } = this.state;
    const {
      firstName,
      middleName,
      lastName,
      email,
      streetAddress,
      apt,
      city,  
      state,
      zipCode,
      sSN,
      drivingLicense,
      age,
    } = this.state;
    //this is how we can pass the values into the components and
    //render them into the inputs
    const values = {
      firstName,
      middleName,
      lastName,
      email,
      streetAddress,
      apt,
      city,
      state,
      zipCode,   
      sSN,
      drivingLicense,
      age,    
    };

    //we are making a case for each number so we use a switch instead
    //of return
    switch (step) {
      //case 1 returns the form user details component
      case 1:
        return (
          //it will take in a couple of props
          //when you add attributes to a component,
          //those are props. We need to do that because we need to access
          //next step and handle change
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            //styles={styles}
          />
        );
      case 2:
        return (
          //it will take in a couple of props
          //when you add attributes to a component,
          //those are props. We need to do that because we need to access
          //next step and handle change
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            //styles={styles}
          />
        );
      case 3:
        return (
          //it will take in a couple of props
          //when you add attributes to a component,
          //those are props. We need to do that because we need to access
          //next step and handle change
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            //styles={styles}
          />
        );
      case 4:
        return <Success />;
    }
  }
}

//const styles = {
//button: {
//margin: 15,
//},
//};

export default UserForm;
