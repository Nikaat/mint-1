import { configureStore } from "@reduxjs/toolkit";
import genderReducer from "./reducers/GenderSel";
import quizReducer from "./reducers/Quiz";

export const store = configureStore({
  reducer: {
    genderSel: genderReducer,
    quiz: quizReducer,
  },
});
