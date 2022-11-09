import React from "react";

import classes from "./feedbacksSection.module.css";
import AppStoreReview from "./appStoreReview/appStoreReview";

const feedbacksSection = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.AppStoreReviewsDesktop}>
        <h1 className={classes.AppStoreReviewsTitle}>Users love our plans</h1>
        <div className={classes.AppStoreReviewsSubtitle}>
          Here's what people are saying about BetterMe
        </div>
        <AppStoreReview
          titleText="How the program helps me"
          dateText="7 July"
          nameText="IAmMoorer"
          comment="The hardest part for me was to have a plan and stick with it....
            Better Me has it all laid out. The MOST important lesson I have
            learned though.....even though I might feel that I “don’t eat a lot”
            counting those calories will reveal your TRUTH. What you eat is a
            fraction of the battle....count those calories and WIN the battle."
          openModal={props.openModal}
        />
        <AppStoreReview
          titleText="Thank You!"
          dateText="24 June"
          nameText="Onya Jones"
          comment="Ok, so whoever made this a thing I thank you so much! That’s
            because this is making me fit and I think if I do it for the
            while month or maybe even just this whole week I will most
            definitely lose some pounds and burn some belly fat. I mean it
            is a little tiering but anywhere they have good exercises then
            it will tire you and you will be tired afterwards. But I get
            support from my mom because we do it together so it is fun/funny
            for us. Thank you and to you reading this have a great day. "
          openModal={props.openModal}
        />
        <AppStoreReview
          titleText="Convenient for moms"
          dateText="18 Aug"
          nameText="afii20"
          comment="I’ve never really been into sports, and you don’t have that much
            time if you’re a stay at home mom. I have understood that I
            really need to work out when carrying my infant around the house
            started to hurt my back. So I downloaded Betterme and started
            doing shoulder/back routines. This may sound unbelievable but
            after a week my back pain disappeared and I could hold my baby
            for a longer time. I performed the exercises for 10 to 15
            minutes and got unbelievable results. That happened a few months
            ago. In some time, I deleted the app, thinking I could find
            something better without paying. Obviously, I was wrong and did
            no exercise after deleting the app. So I’m installing it again
            and look forward to working out!"
          openModal={props.openModal}
        />
      </div>
      {/* 
      <div className={classes.AppStoreReviewsMobile}>
        <div className={classes.Faq}>
          <div className="faq-accordion_container__leW8s">
            <span className="faq-accordion_title__85xZa">People Often Ask</span>
            <ul className="faq-accordion_questionsList__yRzlP">
              <div className="faq-accordion_faqItem__8PP8i">
                <div className="faq-accordion_faqQuestion__Lyz_T">
                  I’m worried that I’ll quit the Meal Plan halfway
                  <div className="faq-accordion_faqItemBtn__0msy0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="faq-accordion_faqItemBtnIcon__phkTC"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.72413 7.64458C5.15261 7.19464 5.84732 7.19464 6.2758 7.64458L12.0331 13.6901L17.8167 7.61687C18.2452 7.16694 18.9399 7.16694 19.3684 7.61687C19.7969 8.06681 19.7969 8.7963 19.3684 9.24624L13.5847 15.3195L13.5925 15.3277L12.0409 16.957L4.72413 9.27394C4.29565 8.824 4.29565 8.09451 4.72413 7.64458Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="faq-accordion_faqAnswer__Qc5HM">
                  <div className="faq-accordion_faqAnswerText__6jHiw">
                    We totally get it, and that’s why we made sure that our Meal
                    Plans are as similar to the regular menu as possible. We
                    believe that even those who live off fast food will be
                    satisfied with both the meals and the results, and never
                    feel hungry.
                  </div>
                </div>
              </div>
              <div className="faq-accordion_faqItem__8PP8i">
                <div className="faq-accordion_faqQuestion__Lyz_T">
                  I don’t want to give up my sweets!
                  <div className="faq-accordion_faqItemBtn__0msy0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="faq-accordion_faqItemBtnIcon__phkTC"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.72413 7.64458C5.15261 7.19464 5.84732 7.19464 6.2758 7.64458L12.0331 13.6901L17.8167 7.61687C18.2452 7.16694 18.9399 7.16694 19.3684 7.61687C19.7969 8.06681 19.7969 8.7963 19.3684 9.24624L13.5847 15.3195L13.5925 15.3277L12.0409 16.957L4.72413 9.27394C4.29565 8.824 4.29565 8.09451 4.72413 7.64458Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="faq-accordion_faqAnswer__Qc5HM">
                  <div className="faq-accordion_faqAnswerText__6jHiw">
                    And you don't have to. We know that it’s hard to get rid of
                    the sweet tooth, and included sweet dishes into the meal
                    plan. We’ve picked balanced sweets.
                  </div>
                </div>
              </div>
              <div className="faq-accordion_faqItem__8PP8i">
                <div className="faq-accordion_faqQuestion__Lyz_T">
                  Can I lose weight without working out?
                  <div className="faq-accordion_faqItemBtn__0msy0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="faq-accordion_faqItemBtnIcon__phkTC"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.72413 7.64458C5.15261 7.19464 5.84732 7.19464 6.2758 7.64458L12.0331 13.6901L17.8167 7.61687C18.2452 7.16694 18.9399 7.16694 19.3684 7.61687C19.7969 8.06681 19.7969 8.7963 19.3684 9.24624L13.5847 15.3195L13.5925 15.3277L12.0409 16.957L4.72413 9.27394C4.29565 8.824 4.29565 8.09451 4.72413 7.64458Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="faq-accordion_faqAnswer__Qc5HM">
                  <div className="faq-accordion_faqAnswerText__6jHiw">
                    Sure thing! Nutrition is the most important element in
                    weight loss. However if you incorporate workouts, your body
                    will get more toned and defined. We know it’s a lot to take
                    on, and the workouts are extremely easy, suitable for
                    first-timers, and will take up barely any time.
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default feedbacksSection;
