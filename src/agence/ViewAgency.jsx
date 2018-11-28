import React, { Component } from "react";
import { connect } from "react-redux";
// action
import getVclByAgency from "./action/getVclByAgency";

class ViewAgency extends Component {
  componentDidMount() {
    this.props.getVclByAgency(this.props.match.params.id);
  }
  render() {
    console.log("this.props", this.props);
    const { listeVcl } = this.props;
    return (
      <div className="main">
        <div className="container">
          <h1>Bienvenue sur l'agence {this.props.match.params.id} </h1>
        </div>
        <div className="container">
          <div className="row">
            {listeVcl.length > 0 ? (
              listeVcl.map((vcl, index) => {
                return (
                  <div key={index} className="col col-listAgence">
                    <div className="card" style={{ width: "18rem" }}>
                      <div className="card-body">
                        <h5 className="card-title">nom : {vcl.nom}</h5>
                        <p className="card-text">type : {vcl.type}</p>
                        <p className="card-text">prix : {vcl.prix_j}€/j</p>
                        <button className="btn btn-default">Réserver</button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Désolé mais il n'y a aucun vcl de disponible</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({ listeVcl: state.currentAgence.listeVcl });
const mapDispatchToProps = { getVclByAgency };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewAgency);
