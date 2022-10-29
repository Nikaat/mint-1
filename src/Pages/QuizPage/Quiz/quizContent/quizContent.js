import React from "react";

import SingleSelectQuestion from "./SingleSelectQuestion/SingleSelectQuestion";
import InputQuestion from "./InputQuestion/InputQuestion";
import MultiSelectQuestion from "./MultiSelectQuestion/MultiSelectQuestion";
import DatePicker from "./Calendar/datePicker";

const QuizContent = (props) => {
  let QuestionType;
  // switch (props.questionType) {
  switch (props.result.questionType) {
    // case "SingleSelectQuestion" :
    case "singleSelect":
      QuestionType = (
        <SingleSelectQuestion
          // dataCard={props.dataCard}
          // header={props.header}
          header={props.result.text}
          dataCard={props.result.answers}
          // optionImages={props.optionImages}
          // optionwithimage={props.optionwithimage}
          // hint={props.hint}
          // video={props.video}
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
      QuestionType = <DatePicker header={props.header} />;
      break;
    default:
      break;
  }

  return QuestionType;
};

export default QuizContent;
