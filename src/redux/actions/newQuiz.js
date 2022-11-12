import axios from "axios";

import * as actionTypes from "./actionTypes";
import * as actionCreators from "./index";

export const answerQuestion = (index, aid) => {
  return {
    type: actionTypes.ANSWER_QUESTION,
    index: index,
    aid: aid,
  };
};

export const changequestionPage = () => {
  return {
    type: actionTypes.CHANGE_QUESTION_PAGE,
  };
};

export const clickedonNextButton = (prevCode, answerIndexes) => {
  let aids = "";
  answerIndexes.map((item) => {
    if (item != null) {
      aids = aids + item + ",";
    }
    return aids;
  });

  return (dispatch) => {
    console.log(aids);
    setTimeout(() => {
      axios
        .get(
          "https://mintdoctor.ir/process/v2/main/question.php?type=eghdam&code=" +
            prevCode +
            "&aid=" +
            aids
        )
        .then((res) => {
          console.log(res);
          const code = res.data.result.code;
          const result = res.data.result;
          dispatch(saveFetchedData(code, result));
          dispatch(nullAnswerIndex());
        });
    }, 1000);
  };
};

export const nullAnswerIndex = () => {
  return {
    type: actionTypes.NULL_ANSWER_INDEX,
  };
};

export const clickedonQuizCard = (index, prevAid, prevCode) => {
  return (dispatch) => {
    dispatch(answerQuestion(index));
    setTimeout(() => {
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
          const result = res.data.result;
          dispatch(saveFetchedData(code, result));
          dispatch(nullAnswerIndex());
        });
    }, 1000);
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

export const saveFetchedData = (code, result) => {
  return {
    type: actionTypes.SAVE_FETCHED_DATA,
    code: code,
    result: result,
  };
};

export const fetchData = () => {
  return (dispatch) => {
    // const headers = {
    //   "Content-Type": "application/json",
    //   Authorization: "",
    //   token: "",
    // };
    axios
      .get(
        "https://mintdoctor.ir/process/v2/main/question.php?type=eghdam&aid=start"
      )
      .then((res) => {
        console.log(res);
        const code = res.data.result.code;
        const result = res.data.result;
        dispatch(saveFetchedData(code, result));
      });
  };
};

export const goNext = (prevAid, prevCode) => {
  return (dispatch) => {
    setTimeout(() => {
      axios
        .get(
          "https://mintdoctor.ir/process/v2/main/question.php?type=eghdam&code=" +
            prevCode +
            "&aid=" +
            prevAid
        )
        .then((res) => {
          // console.log(
          //   "https://mintdoctor.ir/process/v2/main/question.php?type=eghdam&code=" +
          //     prevCode +
          //     "&aid=" +
          //     prevAid
          // );
          console.log(res);
          const code = res.data.result.code;
          const result = res.data.result;
          dispatch(saveFetchedData(code, result));
        });
    }, 1000);
  };
};
