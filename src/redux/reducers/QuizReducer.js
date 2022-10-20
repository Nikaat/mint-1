import * as actionTypes from "../actions/actions";

const initialState = {
  answerIndex: null,
  questionNum: 0,
  heightscale: "FT",
  weightscale: "LBS",
  inputValue: {
    ftvalue: "",
    invalue: "",
    cmvalue: "",
    lbsvalue: "",
    kgvalue: "",
  },
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ANSWER_QUESTION:
      return {
        ...state,
        answerIndex: action.index,
      };
    case actionTypes.CHANGE_QUESTION_PAGE:
      return {
        ...state,
        questionNum: state.questionNum + 1,
        answerIndex: null,
      };
    case actionTypes.REDIRECT_TO_FIRST_PAGE:
      return {
        ...state,
      };
    case actionTypes.RETURN_TO_PREVIUS_QUESTION:
      return {
        ...state,
        questionNum: state.questionNum - 1,
      };
    default:
      return state;
  }
};

export default quizReducer;
