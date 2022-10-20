export const GENDER_SELECTION = "GENDER_SELECTION";
export const CHANGE_PAGE = "CHANGE_PAGE";

export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const CHANGE_QUESTION_PAGE = "CHANGE_QUESTION_PAGE";
export const REDIRECT_TO_FIRST_PAGE = "REDIRECT_TO_FIRST_PAGE";
export const RETURN_TO_PREVIUS_QUESTION = "RETURN_TO_PREVIUS_QUESTION";

export const genderSelection = (genderType) => {
  return {
    type: GENDER_SELECTION,
    gender: genderType,
  };
};

export const changePage = () => {
  return {
    type: CHANGE_PAGE,
  };
};

export const clickedonGenderCard = (genderType) => {
  return (dispatch) => {
    dispatch(genderSelection(genderType));
    setTimeout(() => {
      dispatch(changePage());
    }, 1000);
  };
};

export const answerQuestion = (index) => {
  return {
    type: ANSWER_QUESTION,
    index: index,
  };
};

export const changequestionPage = () => {
  return {
    type: CHANGE_QUESTION_PAGE,
  };
};

export const clickedonQuizCard = (index, qNum) => {
  return (dispatch) => {
    dispatch(answerQuestion(index));
    if (qNum <= 16) {
      setTimeout(() => {
        dispatch(changequestionPage());
      }, 1000);
    }
  };
};

export const redirectToFirstPage = () => {
  return {
    type: REDIRECT_TO_FIRST_PAGE,
  };
};

export const returnToPreviusQuestion = (qNum) => {
  return {
    type: RETURN_TO_PREVIUS_QUESTION,
    qNum: qNum,
  };
};

export const onArrow = (qNum) => {
  return (dispatch) => {
    if (qNum === 0) {
      setTimeout(() => {
        dispatch(redirectToFirstPage());
      }, 1000);
    } else {
      setTimeout(() => {
        dispatch(returnToPreviusQuestion(qNum));
      }, 1000);
    }
  };
};
