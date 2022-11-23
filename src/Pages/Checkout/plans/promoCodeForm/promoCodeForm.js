import React from "react";
import { useState } from "react";

import classes from "./promoCodeForm.module.css";

const PromoCodeForm = (props) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <form className={classes.Container} style={{ display: "none" }}>
      <h4 className={classes.PromoHeading}>Apply promo code</h4>
      <div className={classes.Content}>
        <div className={classes.InputContainer}>
          <input
            placeholder="Enter promo code"
            className={classes.Input}
            type="text"
            name="promo"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
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

export default PromoCodeForm;
