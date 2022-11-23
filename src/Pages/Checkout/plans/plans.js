import React from "react";

import classes from "./plans.module.css";
import Breakdown from "./breakdown/breakdown";
import PromoCodeForm from "./promoCodeForm/promoCodeForm";
import Legal from "./legal/legal";

const plans = (props) => {
  return (
    <div className={classes.Plans}>
      <div className={classes.Container}>
        <div className={classes.ChoosePlanGenericContainer}>
          <h3 className={classes.ChoosePlanHeader}>انتخاب خدمات مورد نیاز</h3>
          <div className={classes.PlanListContainer}>
            {props.result.plans.map((plan, index) => (
              <Breakdown
                key={"plan" + index}
                index={index}
                planName={plan.title}
                price={plan.price}
                discountPrice={plan.discountPrice}
                description={plan.description}
                // singleLine="1 month"
                // dollors="1"
                // cents="02"
                active={props.planSelectedIndex === index ? "true" : "false"}
                id="month"
                clicked={props.clicked}
              />
            ))}
            {/* <Breakdown
              planName="1-MONTH PLAN"
              price="28.56"
              singleLine="1 month"
              dollors="1"
              cents="02"
              active={monthAcive}
              id="month"
              clicked={props.clicked}
            />
            <Breakdown
              planName="7-DAY PLAN"
              price="9.99"
              singleLine="7 days"
              dollors="1"
              cents="43"
              active={weekAcive}
              id="week"
              clicked={props.clicked}
            />
            <Breakdown
              planName="3-MONTH PLAN"
              price="42.84"
              singleLine="3 months"
              dollors="0"
              cents="36"
              data="affiliates-introductory-3-subs-3-month"
              active={month3Acive}
              id="month3"
              clicked={props.clicked} 
            />*/}
          </div>
          <PromoCodeForm />
        </div>
        <div className={classes.ButtonContainer}>
          <button
            type="button"
            className={classes.Button}
            data-button="checkout-get-plan"
          >
            دریافت رژيم
          </button>
        </div>
        <div style={{ display: "none" }} className={classes.LegalContainer}>
          <Legal />
        </div>
        <div className={classes.SafeCheckout} style={{ display: "none" }}>
          <div className={classes.ChoosePlanSafeCheckout}>
            <span className={classes.SafeCheckoutText}>
              Guaranteed <b>Safe</b> Checkout
            </span>
            <img
              className={classes.ChoosePlanSafeCheckoutCards}
              src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Color_siuuw2"
              srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Color_siuuw2 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/Color_siuuw2 2x"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default plans;
