import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./GenderSelection.module.css";
import GenderSelectioncard from "./GenderSelectionCard/GenderSelectionCard";
import { clickedonQuizCard } from "../../../../../redux/actions";
import Hint from "../hint/hint";

const GenderSelection = (props) => {
  return (
    <main className={classes.GenderSelection}>
      <div className={classes.Header}>
        <h1 className={classes.HeaderTitle}>{props.header}</h1>
      </div>
      <section className={classes.buttonSection}>
        {props.dataCard.map((opt, index) => (
          <GenderSelectioncard
            {...opt}
            idx={index}
            key={opt.aid + index}
            image={opt.image}
            onAnswer={props.onSingleAnswer}
          />
        ))}
      </section>
      {props.hint.caption !== "" ? (
        <Hint title={props.hint.title} caption={props.hint.caption} />
      ) : null}
      {props.isAnswered === true ? <Navigate to={props.nextPage} /> : null}
    </main>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSingleAnswer: (index, aid, code) =>
    dispatch(clickedonQuizCard(index, aid, code)),
});

export default connect(null, mapDispatchToProps)(GenderSelection);
