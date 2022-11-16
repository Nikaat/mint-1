import * as actionTypes from "./actionTypes";

export const genderSelection = (genderType) => {
  return {
    type: actionTypes.GENDER_SELECTION,
    gender: genderType,
  };
};

export const changePage = (genderType) => {
  return {
    type: actionTypes.CHANGE_PAGE,
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

export const returnToFirstPage = () => {
  return {
    type: actionTypes.RETURN_TO_FIRST_PAGE,
  };
};
