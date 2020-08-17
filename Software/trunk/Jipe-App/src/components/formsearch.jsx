import React, { Component } from "react";

class formsearch extends Component {
  //This is where you run your API calls to firebase

  render() {
    //this is where const {search } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="ID Number"
            aria-label="search"
            name="fullName"
          ></input>

          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}
export default formsearch;

//<div contentEditable="plaintext-only">k</div>
//<div pseudo="placeholder">Search</div>
//onChange="this.handleInputChange"
