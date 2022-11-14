import React from "react";

import SingleSelectQuestion from "./SingleSelectQuestion/SingleSelectQuestion";
import InputQuestion from "./InputQuestion/InputQuestion";
import MultiSelectQuestion from "./MultiSelectQuestion/MultiSelectQuestion";
import DatePicker from "./Calendar/datePicker";

const QuizContent = (props) => {
  let QuestionType;

  switch (props.result.questionType) {
    case "singleSelect":
      QuestionType = (
        <SingleSelectQuestion
          header={props.result.text}
          dataCard={props.result.answers}
          image={props.result.image}
          // hint={props.hint}
          // video={props.video}
        />
      );
      break;
    case "inputQuestion":
      QuestionType = <InputQuestion header={props.header} hint={props.hint} />;
      break;
    case "multiSelect":
      QuestionType = (
        <MultiSelectQuestion
          dataCard={props.result.answers}
          header={props.result.text}
          // optionImages={props.optionImages}
          // optionwithimage={props.optionwithimage}
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
