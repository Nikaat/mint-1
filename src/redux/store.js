import { configureStore } from "@reduxjs/toolkit";
import genderReducer from "./reducers/GenderSelReducer";
import quizReducer from "./reducers/QuizReducer";

export const store = configureStore({
  reducer: {
    genderSel: genderReducer,
    quiz: quizReducer,
  },
});
