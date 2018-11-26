import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <main role="main" className="container">
        <div className="jumbotron">
          <h1>Bonjour {this.props.name}</h1>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="adress">Où vous trouvez-vous ?</label>
              <input
                type="text"
                className="form-control"
                id="adress"
                aria-describedby="emailHelp"
                placeholder="adresse ..."
                value={this.state.value}
                onChange={this.handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                exemple : 10, rue de la fontaine 31000 Toulouse
              </small>
            </div>
            <input
              className="btn btn-lg btn-primary"
              type="submit"
              value="Touver une agence"
            />
          </form>
        </div>
      </main>
    );
  }
}
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Home);
