import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  planSelectedIndex: 0,
  discount: true,
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHOOSE_PLAN:
      return updateObject(state, { planSelectedIndex: action.index });
    case actionTypes.NO_DISCOUNT:
      return updateObject(state, { discount: false });
    default:
      return state;
  }
};

export default checkoutReducer;
