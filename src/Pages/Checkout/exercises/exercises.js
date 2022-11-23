import React from "react";

import classes from "./exercises.module.css";
import Exercise from "./exercise/exercise";

const exercises = (props) => {
  return (
    <div className={classes.Exercises} style={{ display: "none" }}>
      <div className={classes.Container}>
        <div className={classes.PlanContainer}>
          <h3 className={classes.Header}>Easy-to-follow exercises</h3>
          <h4 className={classes.Subtitle}>Personalized routines </h4>
          <div className={classes.CardsContainer}>
            <Exercise
              img={{
                src: "https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_tetwc5.jpg",
                srcSet:
                  "https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_tetwc5.jpg 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_tetwc5.jpg 2x",
              }}
              contentTitle="Flat belly"
              time="7 min"
              additionalInfo="repeat 4 times"
            />
            <Exercise
              img={{
                src: "https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_db59gz.jpg",
                srcSet:
                  "https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_db59gz.jpg 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_db59gz.jpg 2x",
              }}
              contentTitle="Springy butt"
              time="7 min"
              additionalInfo="repeat 4 times"
            />
            <Exercise
              img={{
                src: "https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_4_g53mkv.jpg",
                srcSet:
                  "https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_4_g53mkv.jpg 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_4_g53mkv.jpg 2x",
              }}
              contentTitle="Shoulders and arms"
              time="3 min"
              additionalInfo="repeat 4 times"
            />
            <Exercise
              img={{
                src: "https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_3_kxmucn.jpg",
                srcSet:
                  "https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_3_kxmucn.jpg 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_3_kxmucn.jpg 2x",
              }}
              contentTitle="Back & chest"
              time="3 min"
              additionalInfo="repeat 4 times"
            />
            <Exercise
              img={{
                src: "https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_2_zapvba.jpg",
                srcSet:
                  "https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_2_zapvba.jpg 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_2_zapvba.jpg 2x",
              }}
              contentTitle="Dumbbell exercises"
              time="3 min"
              additionalInfo="repeat 4 times"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default exercises;
