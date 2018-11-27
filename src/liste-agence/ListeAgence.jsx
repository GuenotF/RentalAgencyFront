import React, { Component } from "react";
import { connect } from "react-redux";
import getAgency from "./actions/getAgency";

class ListeAgence extends Component {
  componentDidMount() {
    this.props.getAgency();
  }

  render() {
    const { listeAgence } = this.props;
    console.log("Liste: ", listeAgence);
    console.log("Props: ", this.props);

    return (
      <div className="container">
        <div className="row">
          {listeAgence.map((agence, index) => (
            <div key={index} className="col">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{agence.nom}</h5>
                  <p className="card-text">{agence.adresse}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ listeAgence: state.agency.liste });

const mapDispatchToProps = { getAgency };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListeAgence);
