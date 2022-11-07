import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  planSelected: "month",
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHOOSE_PLAN:
      return updateObject(state, { planSelected: action.plan });
    default:
      return state;
  }
};

export default checkoutReducer;
