import React from "react";

import classes from "./breakdown.module.css";

const breakdown = (props) => {
  return (
    <div
      data-plan={props.data}
      className={classes.Plan}
      data-price="699"
      data-selected="false"
    >
      <div
        className={
          props.active === "false"
            ? [classes.PlanCard]
            : [classes.PlanCard, classes.PlanCardActive].join(" ")
        }
        onClick={() => props.clicked(props.id)}
      >
        {props.data === "affiliates-introductory-3-subs-1-month" ? (
          <div
            className={classes.MostPopularLabel}
            style={{
              backgroundColor:
                props.active === "true" ? "" : "var(--neutral300Color)",
            }}
          >
            MOST POPULAR
          </div>
        ) : null}
        <div
          className={classes.MainContentItemContainer}
          style={{
            "--MainContentItemContainer-border-radius":
              props.data === "affiliates-introductory-3-subs-1-month"
                ? "0 0 8px 8px"
                : "8px",
            borderTop:
              props.data === "affiliates-introductory-3-subs-1-month"
                ? "none"
                : "",
            "--before-border-color":
              props.active === "true"
                ? "var(--primary400Color)"
                : "var(--neutral400Color)",
            "--after-top":
              props.active === "true" ? "calc(50% - 14px/2)" : null,
            "--after-left": props.active === "true" ? "19px" : null,
            "--after-width": props.active === "true" ? "14px" : null,
            "--after-height": props.active === "true" ? "14px" : null,
            "--after-background":
              props.active === "true" ? "var(--primary400Color)" : null,
            borderColor:
              props.active === "true"
                ? "var(--primary400Color)"
                : "var(--neutral300Color)",
          }}
        >
          <div className={classes.PlanMainInfo}>
            <div
              className={classes.PlanName}
              style={{
                "--plan-name-color":
                  props.active === "true"
                    ? "var(--neutral900Color)"
                    : "var(--neutral600Color)",
              }}
            >
              {props.planName}
            </div>
            <div className={classes.PricingDetails}>
              <div className={classes.PlanDescription}>
                <span className={classes.PlanPriceStriked}></span> $
                {props.price} per{" "}
                <span className={classes.singleLine}>{props.singleLine}</span>
              </div>
            </div>
          </div>
          <div className={classes.PlanPerDay}>
            <svg
              width="165"
              height="48"
              viewBox="0 0 165 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={classes.PriceLabel}
              style={{
                "--label-color":
                  props.active === "true"
                    ? "var(--primary100Color)"
                    : "var(--neutral200Color)",
              }}
            >
              <path d="M15.5669 1.57768C16.3234 0.583597 17.5009 0 18.7501 0H215.5039C218.8176 0 221.5039 2.68629 221.5039 6V42C221.5039 45.3137 218.8176 48 215.5039 48H19.7413C17.8675 48 16.1013 47.1246 14.9666 45.6335L1.26892 27.6335C-0.364796 25.4866 -0.364799 22.5134 1.26892 20.3665L15.5669 1.57768Z"></path>
            </svg>
            <div className={classes.Price}>
              <span className={classes.Currency}>$</span>
              <span className={classes.Dollars}>{props.dollors}</span>
              <span className={classes.Row}>
                <span className={classes.Cents}>{props.cents}</span>
                <span className={classes.Period}>per day</span>
              </span>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default breakdown;
