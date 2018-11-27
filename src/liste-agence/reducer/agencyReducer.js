import listeActions from '../actions/index-types';

const initState = {
    liste: []
};

export default function ListeReducer(state = initState, action) {
    switch (action.type) {

        case listeActions.GET_AGENCY:
            return { ...state,
                liste: action.payload
            };

        default:
            return state;
    }
}