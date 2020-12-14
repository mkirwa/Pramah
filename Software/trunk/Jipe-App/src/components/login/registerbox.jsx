import React, { Component } from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import { TextField } from "material-ui";

const userTypes = [
  { label: "Driver", value: 1 },
  { label: "Admin", value: 2 },
  { label: "Accountant", value: 3 },
  { label: "Dispatch", value: 4 },
];

class RegisterBox extends React.Component {
  //instead of hard coding all the counters in the render method
  //div section,
  //just use an array instead and render them using the map method
  //array will have counter objects
  //add a new property allcomponents
  // Use this to uniquely identify each
  //counter
  constructor(props){
    super(props);

    this.state = {
        fields: {},
        errors: {}
    }
 }
  
  // state = {
  //   companyCode:"", 
  //   userTypes:"",
  //   email:"",
  //   password:"",
  //   confirmPassword:"",

  // };

  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if(!fields["companyCode"]){
       formIsValid = false;
       errors["companyCode"] = "Cannot be empty";
    }

    // if(typeof fields["name"] !== "undefined"){
    //    if(!fields["name"].match(/^[a-zA-Z]+$/)){
    //       formIsValid = false;
    //       errors["name"] = "Only letters";
    //    }        
    // }

    //Email
    if(!fields["email"]){
       formIsValid = false;
       errors["email"] = "Cannot be empty";
    }

    if(typeof fields["email"] !== "undefined"){
       let lastAtPos = fields["email"].lastIndexOf('@');
       let lastDotPos = fields["email"].lastIndexOf('.');

       if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
        }
   }  
   if(!fields["password"]){
    formIsValid = false;
    errors["password"] = "Cannot be empty";
   }

   if(!fields["confirmPassword"]){
    formIsValid = false;
    errors["confirmPassword"] = "Cannot be empty";
  }else if(!fields["confirmPassword"].match(fields["password"])){
    formIsValid = false;
    errors["confirmPassword"] = "Passwords do not match";
  }

   this.setState({errors: errors});
   return formIsValid;
}


  submitRegister=(e)=>{
    e.preventDefault();
    if(this.handleValidation()){
      alert("Form submitted");
   }else{
      alert("Form has errors.")
   }
    
  }

  handleChange(field, e){         
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
} 

  render() {
  
    return (
      <div className="inner-container">
        <div className="header">Register</div>
        <div>
          </div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="CompanyCode">Company Code</label>
            <input
              ref="companyCode"
              type="text"
              size="5"
              name="CompanyCode"
              className="login-input"
              placeholder="Company Code"
              onChange={this.handleChange.bind(this, "companyCode")}
              defaultValue={this.state.fields["name"]}
            />
            <span style={{color: "red"}}>{this.state.errors["companyCode"]}</span>
          </div>

          <div className="input-group">
            <Select options={userTypes} />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              ref="email"
              type="text"
              size="20"
              name="email"
              className="login-input"
              placeholder="Email"
              onChange={this.handleChange.bind(this, "email")}
              defaultValue={this.state.fields["email"]}
            />
            <span style={{color: "red"}}>{this.state.errors["email"]}</span>

          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              ref="password"
              type="password"
              size="20"
              name="password"
              className="login-input"
              placeholder="Password"
              onChange={this.handleChange.bind(this, "password")}
              defaultValue={this.state.fields["password"]}
            />
          <span style={{color: "red"}}>{this.state.errors["password"]}</span>
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword"> Confirm Password</label>
            <input
              ref="confirmPassword"
              type="password"
              size="20"
              name="confirmPassword"
              className="login-input"
              placeholder="Confirm Password"
              onChange={this.handleChange.bind(this, "confirmPassword")}
              defaultValue={this.state.fields["confirmPassword"]}
            />
          <span style={{color: "red"}}>{this.state.errors["confirmPassword"]}</span>
            <button
              type="button"
              className="login-btn"
              onClick={this.submitRegister.bind(this)}
            >
              Register
            </button>
          </div>
          
        </div>
      </div>
    );
  }
}

export default RegisterBox;

// error={errors.companyCode===""}
// {errors.companyCode != '' && <span style={{color: "red"}}>{this.state.errors.companyCode}</span>}
// {errors.email != '' && <span style={{color: "red"}}>{this.state.errors.email}</span>}
// {errors.password != '' && <span style={{color: "red"}}>{this.state.errors.password}</span>}
// {errors.confirmPassword != '' && <span style={{color: "red"}}>{this.state.errors.confirmPassword}</span>}
