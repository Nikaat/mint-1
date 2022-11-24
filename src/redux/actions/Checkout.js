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

export const sendPlanId = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(goToLogin());
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

export const onLoginInputChange = (value) => {
  return {
    type: actionTypes.ON_INPUT_CHANGE,
    value: value,
  };
};

export const purchase = () => {
  return (dispatch, getState) => {
    let result = getState().quiz.result;
    let planIndex = getState().checkout.planSelectedIndex;
    let planId = result.plans[planIndex].planId;
    setTimeout(() => {
      axios
        .get(
          "https://mintdoctor.ir/process/v2/login/request.php?code=" +
            getState().quiz.code +
            "&Authorization=" +
            getState().quiz.token +
            "&phoneNumber=" +
            getState().checkout.phoneNumber +
            "&plan=" +
            planId +
            "&discount=" +
            getState().checkout.discount
        )
        .then((res) => {
          console.log(
            "https://mintdoctor.ir/process/v2/login/request.php?code=" +
              getState().quiz.code +
              "&Authorization=" +
              getState().quiz.token +
              "&phoneNumber=" +
              getState().checkout.phoneNumber +
              "&plan=" +
              planId +
              "&discount=" +
              getState().checkout.discount
          );
          console.log("goNext-login", res);
          console.log(res.data.success);

          if (res.data.success === "true") {
            window.location = res.data.result.resultLink;
          } else {
            alert(res.data.message);
          }
        });
    }, 1000);
  };
};
