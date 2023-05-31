// App.js

import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
        <div id="Title">Personal Information</div>
        <form>
          <input id="FirstName" placeholder="First Name"></input>
          <input id="LastName" placeholder="Last Name"></input>
          <input id="Title" placeholder="Title"></input>
          <input id="Address" placeholder="Address"></input>
          <input id="Phone Number" placeholder="Phone Number"></input>
          <input id="Email" placeholder="Email"></input>
          <input id="Description" placeholder="Description"></input>
        </form>
        <div id="Title">Experience</div>
        <form>
          <input id="Position" placeholder="Position"></input>
          <input id="Company" placeholder="Company"></input>
          <input id="City" placeholder="City"></input>
          <input id="ExpFrom" placeholder="ExpFrom"></input>
          <input id="ExpTo" placeholder="ExpTO"></input>
        </form>
        <div id="Title">Education</div>
        <form>
          <input id="University" placeholder="University"></input>
          <input id="City" placeholder="City"></input>
          <input id="Degree" placeholder="Degree"></input>
          <input id="UniFrom" placeholder="UniFrom"></input>
          <input id="UniTo" placeholder="UniTo"></input>
        </form>
      </>
    );
  }
}

export default App;
