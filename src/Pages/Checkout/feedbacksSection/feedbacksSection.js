import React from "react";

import classes from "./feedbacksSection.module.css";
import AppStoreReview from "./appStoreReview/appStoreReview";

const feedbacksSection = (props) => {
  return (
    <div className={classes.Container}>
      <div>
        <div className={classes.AppStoreReviews}>
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
          />
        </div>
      </div>
    </div>
  );
};

export default feedbacksSection;
