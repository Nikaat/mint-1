import React from "react";

import SingleSelectQuestion from "./SingleSelectQuestion/SingleSelectQuestion";
import InputQuestion from "./InputQuestion/InputQuestion";
import MultiSelectQuestion from "./MultiSelectQuestion/MultiSelectQuestion";

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
        />
      );
      break;
    case "InputQuestion":
      QuestionType = <InputQuestion header={props.header} />;
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
    default:
      break;
  }

  return QuestionType;
};

export default QuizContent;
