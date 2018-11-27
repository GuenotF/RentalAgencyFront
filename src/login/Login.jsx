import React, { Component } from "react";
import { connect } from "react-redux";
import updateLogin from "./actions/updateLogin";
// sass
import "./login.scss";
// Logo
import logo from "./logo.png";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      password: ""
    };

    this.handleMail = this.handleMail.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMail(event) {
    this.setState({ mail: event.target.value });
  }
  handlePass(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateLogin(true);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="text-center">
        <form onSubmit={this.handleSubmit} className="form-signin">
          <img className="mb-4" src={logo} alt="" width="150" height="150" />
          <h2 className="h3 mb-3 font-weight-normal">
            S'il vous plaît connectez-vous
          </h2>
          <label className="sr-only">Email</label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email"
            required
            autoFocus
            onChange={this.handleMail}
          />
          <label className="sr-only">Mot de passe</label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
            onChange={this.handlePass}
          />

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Connection
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  updateLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
