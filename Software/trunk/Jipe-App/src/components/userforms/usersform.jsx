import React, { Component } from "react";
import FormControl from "react-bootstrap/lib/FormControl";

class UsersForm extends Component {
  render() {
    return (
      <main role="main" className="container">
        <div className="d-flex align-content-center flex-wrap">
          <br />
          <form className>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>

              <div className="col-md-4 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
              <div className="col-md-4 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default UsersForm;
