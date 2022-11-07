import React, { Component } from "react";
import { connect } from "react-redux";

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
import Modal from "../../Components/UI/Modal/modal";
import * as actionTypes from "../../redux/actions/actionTypes";

class Checkout extends Component {
  state = {
    faq: { Q1: false, Q2: false, Q3: false },
    modal: true,
  };

  onfaqQuestion = (q) => {
    if (q === "Q1") {
      this.setState((prevState) => ({
        faq: { ...this.state.faq, Q1: !prevState.faq.Q1 },
      }));
    } else if (q === "Q2") {
      this.setState((prevState) => ({
        faq: { ...this.state.faq, Q2: !prevState.faq.Q2 },
      }));
    } else if (q === "Q3") {
      this.setState((prevState) => ({
        faq: { ...this.state.faq, Q3: !prevState.faq.Q3 },
      }));
    }
  };

  onModalHandler = () => {
    this.setState((prevState) => ({ modal: !prevState.modal }));
  };

  render() {
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
            <Plans
              planSelected={this.props.planSelected}
              clicked={this.props.choosePlan}
            />
            <MealPlan />
            <Exercises />
          </section>
          <section className={classes.FeedbacksSection}>
            <FeedbacksSection openModal={this.onModalHandler} />
          </section>
          <section className={classes.LegalSection}>
            <LegalSection
              faq={this.state.faq}
              faqClicked={this.onfaqQuestion}
            />
          </section>
        </main>
        {/* sidebarBackdrop */}
        {this.state.modal === true ? (
          <Modal clicked={this.onModalHandler} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  planSelected: state.checkout.planSelected,
});

const mapDispatchToProps = (dispatch) => ({
  choosePlan: (plan) => dispatch({ type: actionTypes.CHOOSE_PLAN, plan: plan }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
