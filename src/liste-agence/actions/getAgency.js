import listeActions from '../actions/index-types';


const fakeList = [{
    nom: 'Rental Toulouse Jean-Jaurès',
    adresse: '71 Boulevard Jean-Jaurès 31000 Toulouse'
}, {
    nom: 'Rental Toulouse Arènes',
    adresse: '5 rue de l\'escapade 31300 Toulouse'
}, {
    nom: 'Rental Toulouse François-Verdier',
    adresse: '56 Rue des Fleurs 31400 Toulouse'
}]

export default function getAgency() {
    return function (dispatch) {
        //traitement pour récupére les données
        dispatch({
            type: listeActions.GET_AGENCY,
            payload: fakeList //traitement
        })
    };
}