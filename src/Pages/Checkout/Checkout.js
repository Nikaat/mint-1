import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Checkout.module.css";
import Logo from "../../assets/images/logo.png";
import BurgerButton from "../../Components/UI/BurgerButton/BurgerButton";
import Countdown from "./countdown/countdown";
import CountdownComp from "./countdown/countDownComp/CountDownComp";
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
    modal: false,

    visible: false,
    date: Date.now(),
  };

  componentDidMount = () => {
    const handleScroll = () => {
      let position = window.pageYOffset;
      this.setState({ visible: position > 100 });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
          <div className={classes.HeaderWithCountdownDesktop}>
            <header className={classes.headerwithcountdown}>
              <div className={classes.Logo}>
                <span>
                  <a href="/">
                    <img className={classes.LogoImage} src={Logo} alt="Home" />
                  </a>
                </span>
              </div>
              <Countdown date={this.state.date} />
              <div className={classes.BurgerButton}>
                <BurgerButton />
              </div>
            </header>
          </div>
          <div className={classes.HeaderWithCountdownMobile}>
            <header className={classes.Header}>
              <span>
                <a href="/">
                  <img className={classes.Logo} src={Logo} alt="Home" />
                </a>
              </span>
              <BurgerButton />
            </header>
            <section className={classes.TitleSection}>
              <div className={classes.Container}>
                <span className={classes.Title}>
                  Start{" "}
                  <b className={classes.HighlightedTitle}>losing weight</b>{" "}
                  right now
                </span>
                <span className={classes.SubTitle}>
                  Join over <span>10,000,000</span> members of BetterMe family
                </span>
              </div>
            </section>

            <div className={classes.StickyCountdown}>
              <div>
                <div className={classes.CountdownText}>
                  Reserved price for:{" "}
                  <span className={classes.CountdownTimeUnit}>
                    <CountdownComp date={this.state.date} />
                  </span>
                </div>
              </div>
            </div>

            <div
              className={classes.StickyfixedCountdown}
              style={{
                display: this.state.visible === true ? "block" : "none",
              }}
            >
              <div className={classes.StickyCountdownContainer}>
                <div className={classes.StickyCountdownTime}>
                  <div className={classes.StickyCountdownTimeNumbers}>
                    <CountdownComp date={this.state.date} />
                  </div>
                  <div className={classes.StickyCountdownTimeUnits}>
                    <span className={classes.StickyCountdownTimeUnit}>
                      minutes
                    </span>
                    <span className={classes.StickyCountdownTimeUnit}>
                      seconds
                    </span>
                  </div>
                </div>
                <div className={classes.StickyCountdownCtaContainer}>
                  <button
                    className={classes.StickyPulsingButton}
                    data-button="countdown-button"
                  >
                    GET MY PLAN
                  </button>
                </div>
              </div>
            </div>
          </div>
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
