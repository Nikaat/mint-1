import React from "react";

import classes from "./promoCodeForm.module.css";

const promoCodeForm = (props) => {
  return (
    <form className={classes.Container}>
      <h4 className={classes.PromoHeading}>Apply promo code</h4>
      <div className={classes.Content}>
        <div className={classes.InputContainer}>
          <input
            placeholder="Enter promo code"
            className={classes.Input}
            type="text"
            name="promo"
            value=""
          />
        </div>
        <div className={classes.ButtonContainer}>
          <button className={classes.ButtonWithBorderRadius} disabled="">
            Apply
          </button>
        </div>
      </div>
    </form>
  );
};

export default promoCodeForm;
