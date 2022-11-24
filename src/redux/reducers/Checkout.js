import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  planSelectedIndex: 0,
  discount: true,
  faqIndex: null,
  login: false,
  phoneNumber: "",
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case actionTypes.ON_LOGIN_INPUT_CHANGE:
      return updateObject(state, { phoneNumber: action.value });
    default:
      return state;
  }
};

export default checkoutReducer;
