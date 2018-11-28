import React from "react";

const ListeAgence = props => {
  const { listeAgence } = props;

  if (listeAgence.length > 0) {
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
};

export default ListeAgence;
