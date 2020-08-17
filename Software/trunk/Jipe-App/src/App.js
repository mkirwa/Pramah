import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
//import RaisedButton from "material-ui/RaisedButton";
import { Route, Switch } from "react-router-dom";
import LoginBox from "./components/login/loginbox";
import RegisterBox from "./components/login/registerbox";

import Loads from "./components/loads";
import Users from "./components/users";
import AllDrivers from "./components/alldrivers";
import FormSearch from "./components/formsearch";
import UserForm from "./components/userforms/userform";
import UsersForm from "./components/userforms/usersform";
import AllAccountants from "./components/allaccountants";

import Accountant from "./components/accountants/accountant";
import LoadsAccountant from "./components/accountants/loadsaccountant";
import AccountantDrivers from "./components/accountants/accountantdrivers";
import AccountantDispatchers from "./components/accountants/accountantdispatchers";

import Admin from "./components/admins/admin";
import NavBar from "./components/admins/navbaradmin";
import AddAdmin from "./components/admins/addadmin";
import AddDriver from "./components/admins/adddriver";
import AddAccountant from "./components/admins/addaccountant";
import AddDispatch from "./components/admins/adddispatch";
import LoadsAdmin from "./components/admins/loadsadmin";
import UsersAdmin from "./components/admins/usersadmin";
import AdminAlldrivers from "./components/admins/adminalldrivers";
import AdminAllAdmins from "./components/admins/adminalladmins";
import AdminAllAccountants from "./components/admins/adminallaccountants";

import DriverPayStubs from "./components/driver/driverpaystubs";
import Card1 from "./components/driver/card1";
import Card2 from "./components/driver/card2";
import DepartureBoL from "./components/driver/departurebol";
import ArrivalBoL from "./components/driver/arrivalbol";
import DriverLoads from "./components/driver/driverloads";
import Drivers from "./components/driver/drivers";

import Dispatch from "./components/dispatchs/dispatch";
import DispatchLoads from "./components/dispatchs/dispatchloads";
import DispatchNavbar from "./components/dispatchs/dispatchnavbar";
import DispatchUsers from "./components/dispatchs/dispatchusers";
import DispatchLoad from "./components/dispatchs/dispatchload";
import Dispatchers from "./components/dispatchers";

import "./App.css";
import AllAdmins from "./components/alladmins";
import AdminAllDispatch from "./components/admins/adminalldispatch";
import LoginPage from "./components/login/loginpage";
import { reactDOM } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import firebase from "./config/firebase";

class App extends React.Component {
  state = {
    //instead of hard coding all the counters in the render method
    //div section,
    //just use an array instead and render them using the map method
    //array will have counter objects
    //add a new property allcomponents
    // Use this to uniquely identify each
    //counter
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",

    bio: "",
    companyName: "",
  };

  //calling constructor to bind event handlers to the
  //component and initilize the local state of the component
  constructor(props) {
    //taking a props value from the constructor and passing it
    //to the super() method
    super(props);
    this.state = {
      user: {},
    };
  }

  //This method is available after the HTML from the render
  //has finished loading. component mounted and available to
  //the DOM...authListener is called after the component has mounted
  componentDidMount() {
    this.authListener();
  }

  //authentication listener
  //Gets invoked in the UI threads on changes in the authentication
  //state... When a user is signed in, current user is signed out
  //when the current user changes
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      //console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.id);
      } else {
        this.setState({ user: null });
        //localStorage.removeItem("user");
      }
    });
  }

  submitLogout(e) {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .catch((error) => {
        console.log(error);
      });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChange = (input) => (e) => {
    //take whatever the input is
    //set it to whatever the value is
    //we can get that using the event parameter and using target.value
    //be it firstName, lastName, whatever value is entered
    this.setState({ [input]: e.target.value });
  };

  render() {
    //render method
    console.log("App-rendered");
    //const { search } = this.state;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          {
            //check if the user is signed in if not take them to sign up page
          }

          <div className="content">
            {this.state.user ? (
              <Switch>
                <Route path="/loads" component={Loads} />
                <Route path="/alladmins" component={AllAdmins} />
                <Route path="/navbar" component={NavBar} />
                <Route path="/users" component={Users} />
                <Route path="/dispatchers" component={Dispatchers} />
                <Route path="/formsearch" component={FormSearch} />
                <Route path="/alldrivers" component={AllDrivers} />
                <Route path="/loadsadmin" component={LoadsAdmin} />
                <Route path="/allaccountants" component={AllAccountants} />

                <Route path="/admins/admin" component={Admin} />
                <Route path="/admins/addadmin" component={AddAdmin} />
                <Route path="/admins/addaccountant" component={AddAccountant} />
                <Route path="/admins/adddispatch" component={AddDispatch} />
                <Route path="/admins/adddriver" component={AddDriver} />
                <Route path="/admins/loadsadmin" component={LoadsAdmin} />
                <Route path="/admins/usersadmin" component={UsersAdmin} />
                <Route
                  path="/admins/adminallaccountants"
                  component={AdminAllAccountants}
                />
                <Route
                  path="/admins/adminalldrivers"
                  component={AdminAlldrivers}
                />
                <Route
                  path="/admins/adminalladmins"
                  component={AdminAllAdmins}
                />
                <Route
                  path="/admins/adminalldispatch"
                  component={AdminAllDispatch}
                />

                <Route path="/accountants/accountant" component={Accountant} />
                <Route
                  path="/accountants/loadsaccountant"
                  component={LoadsAccountant}
                />
                <Route
                  path="/accountants/accountantdrivers"
                  component={AccountantDrivers}
                />
                <Route
                  path="/accountants/accountantdispatchers"
                  component={AccountantDispatchers}
                />

                <Route path="/dispatchs/dispatch" component={Dispatch} />
                <Route
                  path="/dispatchs/dispatchnavbar"
                  component={DispatchNavbar}
                />
                <Route
                  path="/dispatchs/dispatchusers"
                  component={DispatchUsers}
                />
                <Route
                  path="/dispatchs/dispatchloads"
                  component={DispatchLoads}
                />
                <Route
                  path="/dispatchs/dispatchload"
                  component={DispatchLoad}
                />

                <Route path="/driver/drivers" component={Drivers} />
                <Route
                  path="/driver/driverpaystubs"
                  component={DriverPayStubs}
                />
                <Route path="/driver/card1" component={Card1} />
                <Route path="/driver/card2" component={Card2} />
                <Route path="/driver/departurebol" component={DepartureBoL} />
                <Route path="/driver/arrivalbol" component={ArrivalBoL} />
                <Route path="/driver/driverloads" component={DriverLoads} />

                <Route path="/login/loginpage" component={LoginPage} />
              </Switch>
            ) : (
              <LoginPage />
            )}
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;

//<NavBar
// totalCounters={
// this.state.allcomponents.filter(c => c.value > 0).length
// }
///>

//handleChange = input => e => {
//take whatever the input is
//set it to whatever the value is
//we can get that using the event parameter and using target.value
//be it firstName, lastName, whatever value is entered
//this.setState({ [input]: e.target.value });
//};

//showLoginBox() {
//this.setState({isLoginOpen: true, isRegisterOpen: false});
//}

//showRegisterBox() {
//this.setState({isRegisterOpen: true, isLoginOpen: false});
//}
