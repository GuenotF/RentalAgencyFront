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

class App extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return <Login />;
    } else {
      return (
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      );
    }
  }
}
const mapDispatchToProps = {};
const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
