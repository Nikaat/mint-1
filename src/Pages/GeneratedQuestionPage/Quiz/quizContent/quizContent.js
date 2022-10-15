import React from "react";

import SingleSelectQuestion from "./SingleSelectQuestion/SingleSelectQuestion";

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
        />
      );
      break;
    default:
      break;
  }

  return QuestionType;
};

export default QuizContent;
