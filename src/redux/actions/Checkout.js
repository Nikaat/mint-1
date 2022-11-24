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
