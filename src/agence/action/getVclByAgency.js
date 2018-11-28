import listeActions from "./index-types";
import mockVcl from "../mock-vcl";

export default function getVclByAgency(id) {
  return function(dispatch) {
    const result = mockVcl.filter(mockVcl => mockVcl.fkId_Agency === id);

    console.log(result);

    dispatch({
      type: listeActions.GET_VCL_BY_AGENCY,
      payload: result //rslt de GET AGENCY BY CP
    });
  };
}
