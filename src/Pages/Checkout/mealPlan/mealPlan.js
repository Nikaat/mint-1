import React from "react";

import classes from "./mealPlan.module.css";
import MealPlanInsight from "./mealPlanInsight/mealPlanInsight";

const mealPlan = (props) => {
  return (
    <div className={classes.MealPlan} style={{ display: "none" }}>
      <div className={classes.Container}>
        <div className={classes.InsightsContainer}>
          <h3 className={classes.Header}>Personalized meal plan</h3>
          <h4 className={classes.Subtitle}>Fully customizable </h4>
          <div className={classes.CardsContainer}>
            <MealPlanInsight
              img={{
                srcSet:
                  "https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/walnut-porridge 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/walnut-porridge 2x",
                src: "https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/walnut-porridge",
              }}
              contentHeadline="BREAKFAST"
              contentTitle="Date and walnut porridge"
              time="20 min"
              additionalInfo="468 cal"
            />
            <MealPlanInsight
              img={{
                srcSet:
                  "https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/avocado-hummus_pumdew 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/avocado-hummus_pumdew 2x",
                src: "https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/avocado-hummus_pumdew",
              }}
              contentHeadline="MORNING SNACK"
              contentTitle="Yummy avocado hummus"
              time="10 min"
              additionalInfo="110 cal"
            />
            <MealPlanInsight
              img={{
                srcSet:
                  "https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/baked-cod_ilntmj 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/baked-cod_ilntmj 2x",
                src: "https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/baked-cod_ilntmj",
              }}
              contentHeadline="LUNCH"
              contentTitle="Baked cod with beans"
              time="40 min"
              additionalInfo="610 cal"
            />
            <MealPlanInsight
              img={{
                srcSet:
                  "https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/banana-toast_mvqst8 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/banana-toast_mvqst8 2x",
                src: "https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/banana-toast_mvqst8",
              }}
              contentHeadline="EVENING SNACK"
              contentTitle="Banana almond toast"
              time="5 min"
              additionalInfo="190 cal"
            />
            <MealPlanInsight
              img={{
                srcSet:
                  "https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/shakshuka_kamawx 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/shakshuka_kamawx 2x",
                src: "https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/shakshuka_kamawx",
              }}
              contentHeadline="DINNER"
              contentTitle="Veggie shakshuka"
              time="20 min"
              additionalInfo="575 cal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default mealPlan;
