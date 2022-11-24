import React from "react";

import classes from "./faq.module.css";
import FaqItem from "./faqItem/faqItem";

const faq = (props) => (
  <div className={classes.Container}>
    <span className={classes.Title}>سوالات متداول کاربران</span>
    <ul className={classes.QuestionsList}>
      {props.result.faq.map((item, index) => (
        <FaqItem
          key={index}
          index={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </ul>
  </div>
);

export default faq;
