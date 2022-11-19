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
          borderImage={props.result.borderImage}
          dataCard={props.result.answers}
          header={props.result.text}
          image={props.result.image}
          hint={props.result.hint}
          video={props.result.video}
          description={props.result.description}
        />
      );
      break;
    case "inputQuestion":
      QuestionType = (
        <InputQuestion
          borderImage={props.result.borderImage}
          header={props.result.text}
          HorW={props.result.inputQuestion}
          aid={props.result.answers[0].aid}
        />
      );
      break;
    case "multiSelect":
      QuestionType = (
        <MultiSelectQuestion
          borderImage={props.result.borderImage}
          dataCard={props.result.answers}
          header={props.result.text}
          image={props.result.image}
          hint={props.result.hint}
          video={props.result.video}
          description={props.result.description}
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
