import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// sass
import "./login.scss";

export class Login extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div className="text-center">
        <form className="form-signin">
          <img
            className="mb-4"
            src="../../assets/brand/bootstrap-solid.svg"
            alt=""
            width="72"
            height="72"
          />
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label for="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autofocus
          />
          <label for="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
