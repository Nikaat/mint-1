import * as actionTypes from "./actionTypes";
import * as actionCreators from "./index";

export const answerQuestion = (index) => {
  return {
    type: actionTypes.ANSWER_QUESTION,
    index: index,
  };
};

export const changequestionPage = () => {
  return {
    type: actionTypes.CHANGE_QUESTION_PAGE,
  };
};

export const clickedonNextButton = (qNum) => {
  return (dispatch) => {
    if (qNum <= 16) {
      setTimeout(() => {
        dispatch(changequestionPage());
      }, 1000);
    }
  };
};

export const clickedonQuizCard = (index, qNum) => {
  return (dispatch) => {
    dispatch(answerQuestion(index));
    if (qNum <= 16) {
      setTimeout(() => {
        dispatch(changequestionPage());
      }, 1000);
    } else if (qNum === 16) {
      setTimeout(() => {
        dispatch(goToCalendar());
      });
    }
  };
};

export const returnToPreviusQuestion = (qNum) => {
  return {
    type: actionTypes.RETURN_TO_PREVIUS_QUESTION,
    qNum: qNum,
  };
};

export const onArrow = (qNum) => {
  return (dispatch) => {
    if (qNum === 0) {
      setTimeout(() => {
        dispatch(actionCreators.returnToFirstPage());
      }, 1000);
    } else {
      setTimeout(() => {
        dispatch(returnToPreviusQuestion(qNum));
      }, 1000);
    }
  };
};

export const onScaleChange = () => {
  return {
    type: actionTypes.ON_SCALE_CHANGE,
  };
};

export const onInputChange = (value, scale, qNum) => {
  return {
    type: actionTypes.ON_INPUT_CHANGE,
    value: value,
    scale: scale,
    qNum: qNum,
  };
};

export const goToCalendar = () => {
  return {
    type: actionTypes.GO_TO_CALENDAR,
  };
};
