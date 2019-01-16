import * as actionTypes from "../actionTypes";

export const INITIAL_STATE = {
  structure: [],
  tempNum: 2
};

export default function templatesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_TEMPLATE_SUCCESS:
      return {
        ...state,
        structure: action.payload
      };
    case actionTypes.CHANGE_TEMPLATE:
      return {
        ...state,
        tempNum: action.tempNum
      };
    default:
      return state;
  }
}
