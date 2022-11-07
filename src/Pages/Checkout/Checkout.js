import React from "react";

import classes from "./Checkout.module.css";
import Logo from "../../assets/images/logo.png";
import Countdown from "./countdown/countdown";
import Banner from "./banner/banner";
import Introductory from "./Introductory/Introductory";
import Plans from "./plans/plans";
import MealPlan from "./mealPlan/mealPlan";
import Exercises from "./exercises/exercises";
import FeedbacksSection from "./feedbacksSection/feedbacksSection";
import LegalSection from "./legalSection/legalSection";

const checkout = (props) => {
  return (
    <div
      className={classes.PageContainer}
      data-page="checkout-affiliates-introductory-3-subs"
      id="page"
    >
      <main className={classes.Main}>
        <div className={classes.HeaderWithCountdown}>
          <header className={classes.headerwithcountdown}>
            <div className={classes.Logo}>
              <span>
                <a href="/">
                  <img className={classes.LogoImage} src={Logo} alt="Home" />
                </a>
              </span>
            </div>
            <Countdown />
            <div className={classes.BurgerButton}>
              <button
                className={classes.BurgerbuttonContainer}
                data-button="burger-menu"
              >
                <span className={classes.BurgerbuttonDash}></span>
                <span className={classes.BurgerbuttonDash}></span>
                <span className={classes.BurgerbuttonDash}></span>
              </button>
            </div>
          </header>
        </div>
        {/* mobile only ? */}
        <div className={classes.Banner}>
          <Banner />
        </div>
        <section className={classes.IntroductoryMainSection}>
          <Introductory />
          <Plans />
          <MealPlan />
          <Exercises />
        </section>
        <section className={classes.FeedbacksSection}>
          <FeedbacksSection />
        </section>
        <section className={classes.LegalSection}>
          <LegalSection />
        </section>
      </main>
      {/* <div className="page_sidebarBackdrop__0CPrH">
        <div className="page_sidebar__lpV_0">
          <div className="page_sidebarCloseButton__KlKkY"></div>
          <span>
            <a href="/" className="page_sidebarLink__tCaZq">
              Contact Us
            </a>
          </span>
          <span>
            <a href="/" className="page_sidebarLink__tCaZq">
              FAQ
            </a>
          </span>
          <span>
            <a href="/" className="page_sidebarLink__tCaZq">
              Terms of Service
            </a>
          </span>
          <span>
            <a href="/" className="page_sidebarLink__tCaZq">
              Privacy Policy
            </a>
          </span>
          <span>
            <a href="/" className="page_sidebarLink__tCaZq">
              Subscription Policy
            </a>
          </span>
          <span>
            <a href="/" className="page_sidebarLink__tCaZq">
              Money-Back Policy
            </a>
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default checkout;
