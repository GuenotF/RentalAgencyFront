import { combineReducers } from "redux";
import UserReduceur from "./login/reduceur/userReduceur";
import ListeAgency from "./liste-agence/reducer/agencyReducer";
import ViewAgencyReducer from "./agence/reducer/viewAgencyReducer";

const rootReducer = combineReducers({
  user: UserReduceur,
  agency: ListeAgency,
  currentAgence: ViewAgencyReducer
});

export default rootReducer;
