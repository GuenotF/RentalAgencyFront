export default function updateAnimation(statusAnimation = false) {
  return function(dispatch) {
    dispatch({
      type: global.UPDATE_ANIMATION,
      payload: statusAnimation
    });
  };
}
