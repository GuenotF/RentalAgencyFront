import user from "../actions/index-types";

const initialState = {
  isLoggedIn: false,
  info: {}
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case user.UPDATE_LOGGIN:
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
}
