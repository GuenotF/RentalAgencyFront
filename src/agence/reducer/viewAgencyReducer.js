import listeActions from "../action/index-types";

const initState = {
  listeVcl: []
};

export default function ListeReducer(state = initState, action) {
  switch (action.type) {
    case listeActions.GET_VCL_BY_AGENCY:
      return { ...state, listeVcl: action.payload };

    default:
      return state;
  }
}
