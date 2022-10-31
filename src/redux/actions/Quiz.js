import axios from "axios";

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

export const saveFetchedData = (code, aid, result) => {
  return {
    type: actionTypes.SAVE_FETCHED_DATA,
    code: code,
    aid: aid,
    result: result,
  };
};

export const fetchData = (prevCode, prevAid) => {
  return (dispatch) => {
    // const headers = {
    //   "Content-Type": "application/json",
    //   Authorization: "",
    //   token: "",
    // };
    if (prevCode === "") {
      axios
        .get(
          "https://mintdoctor.ir/process/v2/main/question.php?type=eghdam&aid=start"
        )
        .then((res) => {
          console.log(res);
          const code = res.data.result.code;
          const aid = res.data.result.answers[0].aid;
          const result = res.data.result;
          dispatch(saveFetchedData(code, aid, result));
        });
    } else {
      axios
        .get(
          "https://mintdoctor.ir/process/v2/main/question.php?type=eghdam&code=" +
            prevCode +
            "&aid=" +
            prevAid
        )
        .then((res) => {
          console.log(res);
          const code = res.data.result.code;
          const aid = res.data.result.answers[0].aid;
          const result = res.data.result;
          dispatch(saveFetchedData(code, aid, result));
        });
    }
  };
};
