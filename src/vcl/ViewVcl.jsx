import React, { Component } from "react";
import { connect } from "react-redux";
import mockVcl from "../agence/mock-vcl";

class ViewVcl extends Component {
  render() {
    const result = mockVcl.filter(
      mockVcl => mockVcl.nom === this.props.match.params.id
    );
    console.log(result);

    return (
      <div className="container">
        <div className="row">
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">
                Renseignement concernant le véhicule{" "}
                {this.props.match.params.id}
              </h1>
              <p class="lead">
                Ce véhicule est {mockVcl[0].status ? "libre" : "indisponible"}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {result.length > 0 ? (
            result.map((vcl, index) => {
              return (
                <div>
                  <p className="card-text">
                    Le véhicule suivant est une {vcl.type}. Vous avez la
                    possibilité de le louer pour la somme de {vcl.prix_j}€/j
                  </p>
                  <button className="btn">Louez le !!</button>
                </div>
              );
            })
          ) : (
            <p>Désolé mais il n'y a aucun vcl de disponible</p>
          )}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(ViewVcl);
