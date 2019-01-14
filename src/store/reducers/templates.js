import * as actionTypes from "../actionTypes";

export const INITIAL_STATE = {};

export default function templatesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_TEMPLATE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
