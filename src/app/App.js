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
import ViewAgency from "../agence/ViewAgency";
import ViewVcl from "../vcl/ViewVcl";
// withRouter
import { withRouter } from "react-router";
// compose
import { compose } from "recompose";

class App extends Component {
  render() {
    if (!this.props.isLoggedIn) {
      return <Login />;
    } else {
      return (
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/agency/:id" component={ViewAgency} />
            <Route exact path="/vcl/:id" component={ViewVcl} />
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

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(App);
