import listeActions from '../actions/index-types';
import mockData from '../mock-data';

//On renvoit toutes les agences
export default function getAgency() {
    return function (dispatch) {

        dispatch({
            type: listeActions.GET_AGENCY,
            payload: mockData
        })
    };
}