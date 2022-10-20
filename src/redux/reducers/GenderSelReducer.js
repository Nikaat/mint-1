import * as actionTypes from "../actions/actions";

const initialState = {
  isMale: false,
  isFemale: false,
  isAnswered: false,
};

const genderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GENDER_SELECTION:
      return action.gender === "Male"
        ? { ...state, isMale: true, isFemale: false }
        : { ...state, isFemale: true, isMale: false };
    case actionTypes.CHANGE_PAGE:
      return {
        ...state,
        isAnswered: true,
      };
    default:
      return state;
  }
};

export default genderReducer;
