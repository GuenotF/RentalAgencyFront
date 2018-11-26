import React, { Component } from "react";
import logo from "../asset/images/logo.svg";
import "./App.scss";
import Nav from "../nav/Nav";
import Home from "../home/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Home name="Vincent" />
      </div>
    );
  }
}

export default App;
