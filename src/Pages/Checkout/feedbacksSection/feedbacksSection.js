import React from "react";

import classes from "./feedbacksSection.module.css";
import AppStoreReview from "./appStoreReview/appStoreReview";

const feedbacksSection = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.AppStoreReviews}>
        <h1 className={classes.AppStoreReviewsTitle}>نظرات مامان های مینتی</h1>
        <div className={classes.AppStoreReviewsSubtitle}>
          Here's what people are saying about BetterMe
        </div>
        {props.comments.map((item, index) => (
          <AppStoreReview
            key={index}
            titleText={item.title}
            dateText={item.date}
            nameText={item.profileName}
            profileImage={item.profileImage}
            comment={item.text}
            image={item.image}
            rate={item.rate}
            openModal={props.openModal}
          />
        ))}
      </div>
    </div>
  );
};

export default feedbacksSection;
