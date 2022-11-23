import { configureStore } from "@reduxjs/toolkit";
// import genderReducer from "./reducers/GenderSel";
import quizReducer from "./reducers/Quiz";
import checkoutReducer from "./reducers/Checkout";

export const store = configureStore({
  reducer: {
    // genderSel: genderReducer,
    quiz: quizReducer,
    checkout: checkoutReducer,
  },
});
