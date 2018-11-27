import { combineReducers } from "redux";
import UserReduceur from "./login/reduceur/userReduceur";
import ListeAgency from "./liste-agence/reducer/agencyReducer";

const rootReducer = combineReducers({
  user: UserReduceur,
  agency: ListeAgency
});

export default rootReducer;
