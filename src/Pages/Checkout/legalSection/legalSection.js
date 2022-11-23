import React from "react";

import classes from "./legalSection.module.css";
import Faq from "./faq/faq";
import MoneyBackGuarantee from "./moneyBackGuarantee/moneyBackGuarantee";

const legalSection = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.DesktopOnly}>
        <img
          className={classes.LegalSectionBgLeft}
          src="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_270/v1/weightloss/checkout/pepper_j0p3z6.png"
          srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_270/v1/weightloss/checkout/pepper_j0p3z6.png 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_2.0,fl_lossy,q_auto:eco,w_270/v1/weightloss/checkout/pepper_j0p3z6.png 2x"
          alt="Pepper"
        />
        <img
          className={classes.LegalSectionBgRight}
          src="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_250/v1/weightloss/checkout/avocado_ctuoci.png"
          srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_250/v1/weightloss/checkout/avocado_ctuoci.png 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_2.0,fl_lossy,q_auto:eco,w_250/v1/weightloss/checkout/avocado_ctuoci.png 2x"
          alt="Avocado"
        />
        <div className={classes.Faq}>
          <Faq faq={props.faq} clicked={props.faqClicked} />
        </div>
      </div>
      <div className={classes.MoneyBackGuarantee}>
        <MoneyBackGuarantee />
      </div>
      <div className={classes.AboveButtonElement}>
        <div className={classes.UnderButtonLegalText}>
          <span data-testid="akaTrialLegalTextFull">
            <b>PLEASE NOTE:</b> After your 1-Month introductory offer, unless
            you cancel online in your profile before the end of then-current
            period, your plan will automatically convert to our 1-Month
            subscription plan at a non-discounted price and you will be charged
            $28.56 each month before you cancel. Subscriptions renew
            automatically at the end of each period unless you cancel online in
            your profile. If you are unsure how to cancel, visit our
            <a
              href="/en/subscription-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscription Terms
            </a>
            . Prepayment of total plan cost required. You will need an Android
            or iOS mobile phone to access the full version of the product. You
            may want to take a screenshot of this information and save it.
          </span>
        </div>
      </div>
      <div className={classes.PaymentButton}>
        <button
          type="button"
          className={classes.Button}
          databutton="checkout-get-plan"
        >
          دریافت رژیم
        </button>
      </div>
      <div className={classes.Legal}>
        <div className={classes.LegalAddress}>
          Themistokli Dervi 39, 1st floor, Office 104, 1066, Nicosia, Cyprus.
        </div>
      </div>
    </div>
  );
};

export default legalSection;
