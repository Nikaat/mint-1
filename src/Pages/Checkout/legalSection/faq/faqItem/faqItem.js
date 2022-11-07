import React from "react";

import classes from "./faqItem.module.css";

const faqItem = (props) => (
  <div className={classes.FaqItem}>
    <div
      className={classes.FaqQuestion}
      onClick={() => props.clicked(props.id)}
    >
      {props.question}
      <div className={classes.FaqItemBtn}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classes.FaqItemBtnIcon}
          style={{ transform: props.faq === true ? "rotate(180deg)" : null }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.72413 7.64458C5.15261 7.19464 5.84732 7.19464 6.2758 7.64458L12.0331 13.6901L17.8167 7.61687C18.2452 7.16694 18.9399 7.16694 19.3684 7.61687C19.7969 8.06681 19.7969 8.7963 19.3684 9.24624L13.5847 15.3195L13.5925 15.3277L12.0409 16.957L4.72413 9.27394C4.29565 8.824 4.29565 8.09451 4.72413 7.64458Z"
          ></path>
        </svg>
      </div>
    </div>
    <div
      className={
        props.faq === false ? classes.FaqAnswerClose : classes.FaqAnswerOpen
      }
    >
      <div className={classes.FaqAnswerText}>{props.answer}</div>
    </div>
  </div>
);

export default faqItem;
