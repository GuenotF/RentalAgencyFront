import React, { Component } from "react";
import { connect } from "react-redux";
import getAgency from "./actions/getAgency";
import getAgencyByCp from "./actions/getAgencyByCp";

class ListeAgence extends Component {
  componentDidMount() {
<<<<<<< HEAD
    this.props.getAgency(this.props.cp);
=======
    // this.props.getAgency();
    this.props.getAgencyByCp("31000");
>>>>>>> Fabien
  }

  render() {
    const { listeAgence } = this.props;

    if (this.props.cp) {
      return listeAgence.map((agence, index) => (
        <div key={index} className="col">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{agence.nom}</h5>
              <p className="card-text">{agence.adresse}</p>
            </div>
          </div>
        </div>
      ));
    }
    return null;
  }
}

const mapStateToProps = state => ({ listeAgence: state.agency.liste });

const mapDispatchToProps = { getAgency, getAgencyByCp };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListeAgence);
