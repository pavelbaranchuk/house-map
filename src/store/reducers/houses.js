import * as actionTypes from "../actionTypes";

export const INITIAL_STATE = {};

export default function housesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_HOUSE_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
