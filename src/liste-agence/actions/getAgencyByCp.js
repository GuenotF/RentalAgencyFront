import listeActions from '../actions/index-types';
import mockData from '../mock-data';

export default function getAgencyByCp(cp) {
    return function (dispatch) {
        //traitement pour récupérer les données

        const result = mockData.filter(mockData => mockData.cp === cp);

        console.log(result);

        dispatch({
            type: listeActions.GET_AGENCY_BY_CP,
            payload: result //rslt de GET AGENCY BY CP
        })
    }
}