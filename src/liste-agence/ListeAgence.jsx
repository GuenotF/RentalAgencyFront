import React from "react";
import { Link } from "react-router-dom";
import "./liste-agence.scss";
const ListeAgence = props => {
  const { listeAgence } = props;

  if (listeAgence.length > 0) {
    return listeAgence.map((agence, index) => (
      <div key={index} className="col col-listAgence">
        <Link to={`/agency/${agence.id}`}>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{agence.nom}</h5>
              <p className="card-text">{agence.adresse}</p>
            </div>
          </div>
        </Link>
      </div>
    ));
  }
  return (
    <p>
      <em>Il n'y a pas d'agence pour ce code postale</em>
    </p>
  );
};

export default ListeAgence;
