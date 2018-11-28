import React, { Component } from "react";
import { connect } from "react-redux";
import ListeAgence from "../liste-agence/ListeAgence";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      cp: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("event.target.value", event.target);

    this.setState({ cp: 1 });
  }

  render() {
    return (
      <main role="main" className="container">
        <div className="jumbotron">
          <h1>Bonjour {this.props.name}</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="cp">Entrez un code postal</label>
              <input
                type="text"
                className="form-control"
                id="cp"
                aria-describedby="codePostale"
                placeholder="cp ..."
                value={this.state.value}
                onChange={this.handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                Exemple : 31000
              </small>
            </div>
            <input
              className="btn btn-lg btn-primary"
              type="submit"
              value="Touver une agence"
            />
          </form>
        </div>
        <div className="container">
          <div className="row">
            <ListeAgence cp={this.state.cp} />
          </div>
        </div>
      </main>
    );
  }
}
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Home);
