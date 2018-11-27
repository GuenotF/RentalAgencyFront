import React, { Component } from "react";
import { Switch, Route } from "react-router";
// sass
import "./App.scss";
// import componant
import Nav from "../nav/Nav";
import Home from "../home/Home";
import Login from "../login/Login";
import listeAgence from "../liste-agence/listeAgence";

class App extends Component {
  state = {
    isLoggedIn: false
  };

  render() {
    if (this.state.isLoggedIn) {
      return <Login />;
    } else {
      return (
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/liste-agence" component={listeAgence} />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
