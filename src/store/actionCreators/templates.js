import * as actionTypes from "../actionTypes";

export function loadTemplate(id) {
  return async dispatch => {
    dispatch({
      type: actionTypes.FETCH_TEMPLATE_START,
      payload: { id }
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
          payload: { id, response }
        })
      )
      .catch(error => {
        dispatch({
          type: actionTypes.FETCH_TEMPLATE_FAIL,
          payload: { id, error }
        });
      });
  };
}

export function loadCachedTemplate() {
  return (dispatch, getState) => {
    if (getState().albums.length) {
      return;
    }
    dispatch(loadTemplate());
  };
}
