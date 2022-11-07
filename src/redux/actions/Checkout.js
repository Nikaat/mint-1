import * as actionTypes from "./actionTypes";

export const choosePlan = (plan) => {
  return {
    type: actionTypes.CHOOSE_PLAN,
    plan: plan,
  };
};
