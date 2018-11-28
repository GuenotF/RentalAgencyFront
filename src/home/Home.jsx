import React, { Component } from "react";
import { connect } from "react-redux";
import ListeAgence from "../liste-agence/ListeAgence";
//

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      cp: null,
      warning: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const cp = event.target[0].value;

    if (Number.isInteger(parseInt(cp)) && cp.length === 5) {
      this.setState({ cp: event.target[0].value, warning: false });
    } else {
      this.setState({ warning: true });
    }
  }

  render() {
    console.log("this state", this.state);

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
              {!this.state.warning && (
                <small id="emailHelp" className="form-text text-muted">
                  Exemple : 31000
                </small>
              )}
              {this.state.warning && (
                <div className="invalid-feedback">
                  Merci de rentrer un code postal valide
                </div>
              )}
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
            {this.state.cp
              ? [
                  <h2 className="col-12 text-center" key={1}>
                    Liste des agences dans le {this.state.cp}{" "}
                  </h2>,
                  <ListeAgence key={2} cp={this.state.cp} />
                ]
              : null}
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
