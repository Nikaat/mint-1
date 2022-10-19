import React from "react";

import SingleSelectQuestion from "./SingleSelectQuestion/SingleSelectQuestion";
import InputQuestion from "./InputQuestion/InputQuestion";

const QuizContent = (props) => {
  let QuestionType;

  switch (props.questionType) {
    case "SingleSelectQuestion":
      QuestionType = (
        <SingleSelectQuestion
          isAnswered={props.isAnswered}
          onAnswer={props.onAnswer}
          dataCard={props.dataCard}
          header={props.header}
          optionImages={props.optionImages}
          optionwithimage={props.optionwithimage}
        />
      );
      break;
    case "InputQuestion":
      QuestionType = (
        <InputQuestion
          header={props.header}
          onAnswer={props.onAnswer}
          onInputAnswer={props.onInputAnswer}
          param={props.param}
          scale={props.scale}
          onScaleChange={props.onScaleChange}
          inputValue={props.inputValue}
          onInputChange={props.onInputChange}
        />
      );
      break;
    default:
      break;
  }

  return QuestionType;
};

export default QuizContent;
