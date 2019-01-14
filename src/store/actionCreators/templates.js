import * as actionTypes from "../actionTypes";

export function loadTemplate() {
  return dispatch => {
    dispatch({
      type: actionTypes.FETCH_TEMPLATE_START
    });
    fetch(`http://demo4452328.mockable.io/templates`)
      .then(res => {
        if (res.status >= 400) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(response =>
        dispatch({
          type: actionTypes.FETCH_TEMPLATE_SUCCESS,
          payload: { response }
        })
      )
      .catch(error => {
        dispatch({
          type: actionTypes.FETCH_TEMPLATE_FAIL,
          payload: { error }
        });
      });
  };
}
