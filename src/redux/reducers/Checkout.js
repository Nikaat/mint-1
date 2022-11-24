import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  result: null,
  planSelectedIndex: 0,
  discount: true,
  faqIndex: null,
  login: false,
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_CHECKOUT_DATA:
      return updateObject(state, { result: action.result });
    case actionTypes.CHOOSE_PLAN:
      return updateObject(state, { planSelectedIndex: action.index });
    case actionTypes.NO_DISCOUNT:
      return updateObject(state, { discount: false });
    case actionTypes.SELECT_FAQ:
      return state.faqIndex === action.index
        ? updateObject(state, { faqIndex: null })
        : updateObject(state, { faqIndex: action.index });
    case actionTypes.GO_TO_LOGIN:
      return updateObject(state, { login: true });
    default:
      return state;
  }
};

export default checkoutReducer;
