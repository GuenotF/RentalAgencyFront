import { combineReducers } from "redux";
import UserReduceur from "./login/reduceur/userReduceur";

const rootReducer = combineReducers({
  user: UserReduceur
});

export default rootReducer;
