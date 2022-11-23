import React from "react";

import classes from "./Introductory.module.css";

const introductory = (peops) => {
  return (
    <div className={classes.ContentContainer}>
      <div className={classes.CheckoutPlanBenefits}>
        <div className={classes.PicsListWithImageContainer}>
          <div>
            <div className={classes.PicsListWithImageTitle}>
              <h2 className={classes.Title}>
                چیزی که با خرید اشتراک دریافت می‌کنید
              </h2>
            </div>
            <ul>
              <li className={classes.PicsListItem}>
                <img
                  className={classes.PicsListItemImage}
                  src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/a_f6nufp"
                  srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/a_f6nufp 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/a_f6nufp 2x"
                  alt="Weight loss plan"
                />
                <div>
                  <p className={classes.PicsListItemTitle}>Weight loss plan</p>
                  <p className={classes.PicsListItemSubtitle}>
                    A unique exercise plan that fits into your daily schedule
                    and helps see weight loss and tone results quickly.
                  </p>
                </div>
              </li>
              <li className={classes.PicsListItem}>
                <img
                  className={classes.PicsListItemImage}
                  src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/a_rdbhra"
                  srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/a_rdbhra 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/a_rdbhra 2x"
                  alt="Easy meal plan"
                />
                <div>
                  <p className={classes.PicsListItemTitle}>Easy meal plan</p>
                  <p className={classes.PicsListItemSubtitle}>
                    A personalized Meal Plan that's as close as possible to the
                    regular diet, enhanced to be healthy and helpful to reach
                    your goals.
                  </p>
                </div>
              </li>
              <li className={classes.PicsListItem}>
                <img
                  className={classes.PicsListItemImage}
                  src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/a_eisart"
                  srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/a_eisart 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/a_eisart 2x"
                  alt="Coach support"
                />
                <div>
                  <p className={classes.PicsListItemTitle}>Coach support</p>
                  <p className={classes.PicsListItemSubtitle}>
                    Connect with personal coaches who help with motivation and
                    answer all your questions, and are constantly by your side
                    for fastest and most effective results.{" "}
                  </p>
                </div>
              </li>
            </ul>
            <div className={classes.PicsListWithImageNote}>
              <p className={classes.Footnote}>
                Workouts &amp; Coach support are currently available on our
                mobile apps for Android &amp; iOS
              </p>
            </div>
          </div>
          <div className={classes.ColImg}>
            <img
              className={classes.Image}
              src="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_535/v1/weightloss/checkout/affiliates/Illustration_tn1le6.png"
              srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_535/v1/weightloss/checkout/affiliates/Illustration_tn1le6.png 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_2.0,fl_lossy,q_auto:eco,w_535/v1/weightloss/checkout/affiliates/Illustration_tn1le6.png 2x"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default introductory;
