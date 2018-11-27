import user from "./index-types";

export default function updateLoggin(statutLoggin = false) {
  return function(dispatch) {
    dispatch({
      type: user.UPDATE_LOGGIN,
      payload: statutLoggin
    });
  };
}
