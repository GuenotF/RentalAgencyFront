import React, { Component } from "react";
import { Switch, Route } from "react-router";
// react redux
import { connect } from "react-redux";
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
            <Route exact path="/" render={() => <Home name="Vincent" />} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/liste-agence" component={listeAgence} />
          </Switch>
        </div>
      );
    }
  }
}
const mapDispatchToProps = {};
const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
