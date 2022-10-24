import React from "react";

import SingleSelectQuestion from "./SingleSelectQuestion/SingleSelectQuestion";
import InputQuestion from "./InputQuestion/InputQuestion";
import MultiSelectQuestion from "./MultiSelectQuestion/MultiSelectQuestion";
// eslint-disable-next-line
import EnCalendar from "./Calendar/EnCalendar";
// eslint-disable-next-line
import FaCalendar from "./Calendar/FaCalendar";

const QuizContent = (props) => {
  let QuestionType;

  switch (props.questionType) {
    case "SingleSelectQuestion":
      QuestionType = (
        <SingleSelectQuestion
          dataCard={props.dataCard}
          header={props.header}
          optionImages={props.optionImages}
          optionwithimage={props.optionwithimage}
          hint={props.hint}
          video={props.video}
        />
      );
      break;
    case "InputQuestion":
      QuestionType = <InputQuestion header={props.header} hint={props.hint} />;
      break;
    case "MultiSelectQuestion":
      QuestionType = (
        <MultiSelectQuestion
          dataCard={props.dataCard}
          header={props.header}
          optionImages={props.optionImages}
          optionwithimage={props.optionwithimage}
        />
      );
      break;
    case "Calendar":
      QuestionType = <EnCalendar header={props.header} />;
      break;
    default:
      break;
  }

  return QuestionType;
};

export default QuizContent;
