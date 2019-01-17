import * as actionTypes from "../actionTypes";

export function loadHousesData() {
  return dispatch => {
    dispatch({
      type: actionTypes.FETCH_HOUSE_DATA_START
    });
    fetch(`https://demo4452328.mockable.io/properties`)
      .then(res => {
        if (res.status >= 400) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(response =>
        dispatch({
          type: actionTypes.FETCH_HOUSE_DATA_SUCCESS,
          payload: response
        })
      )
      .catch(error => {
        dispatch({
          type: actionTypes.FETCH_HOUSE_DATA_FAIL,
          payload: { error }
        });
      });
  };
}
