import React from "react";

import classes from "./faq.module.css";
import FaqItem from "./faqItem/faqItem";

const faq = (props) => (
  <div className={classes.Container}>
    <span className={classes.Title}>People Often Ask</span>
    <ul className={classes.QuestionsList}>
      <FaqItem
        question="I’m worried that I’ll quit the Meal Plan halfway"
        answer="We totally get it, and that’s why we made sure that our Meal Plans are
        as similar to the regular menu as possible. We believe that even those
        who live off fast food will be satisfied with both the meals and the
        results, and never feel hungry."
      />
      <FaqItem
        question="I don’t want to give up my sweets!"
        answer="And you don't have to. We know that it’s hard to get rid of the
        sweet tooth, and included sweet dishes into the meal plan. We’ve
        picked balanced sweets."
      />
      <FaqItem
        question="Can I lose weight without working out?"
        answer="Sure thing! Nutrition is the most important element in weight loss.
        However if you incorporate workouts, your body will get more toned
        and defined. We know it’s a lot to take on, and the workouts are
        extremely easy, suitable for first-timers, and will take up barely
        any time."
      />
    </ul>
  </div>
);

export default faq;
