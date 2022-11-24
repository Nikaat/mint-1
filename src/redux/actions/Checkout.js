import axios from "axios";
import * as actionTypes from "./actionTypes";

export const choosePlan = (index) => {
  return {
    type: actionTypes.CHOOSE_PLAN,
    index: index,
  };
};

export const noDiscount = () => {
  return {
    type: actionTypes.NO_DISCOUNT,
  };
};

export const selectFaq = (index) => {
  return {
    type: actionTypes.SELECT_FAQ,
    index: index,
  };
};

export const sendPlanId = (planId) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      axios
        .get(
          "https://mintdoctor.ir/process/v2/main/checkout.php?Authorization=" +
            getState().quiz.token +
            "&type=" +
            getState().quiz.type +
            "&code=" +
            getState().quiz.code +
            "&planId=" +
            planId
        )
        .then((res) => {
          console.log("goNext-login", res);
          const result = res.data.result;
          window.scrollTo(0, 0);
          dispatch(saveCheckooutData(result));
          dispatch(goToLogin());
        });
    }, 1000);
  };
};

export const goToLogin = () => {
  return {
    type: actionTypes.GO_TO_LOGIN,
  };
};

export const saveCheckooutData = (result) => {
  return {
    type: actionTypes.SAVE_FETCHED_DATA,
    result: result,
  };
};
