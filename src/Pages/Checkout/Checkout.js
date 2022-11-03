import React from "react";

import classes from "./Checkout.module.css";
import Logo from "../../assets/images/logo.png";
import Countdown from "./countdown/countdown";
import Banner from "./banner/banner";

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
        <section className="affiliate-introductory-3-subs-customized-area_mainSection__FJkxq">
          <div className="content-container_container__DMPhG">
            <div className="affiliate-introductory-3-subs-customized-area_checkoutPlanBenefits__jafRp">
              <div className="pics-list-with-image_container__iJFpc">
                <div>
                  <div className="pics-list-with-image_title__lVpXP">
                    <h2 className="title_title__E__HO">What you get</h2>
                  </div>
                  <ul>
                    <li className="pics-list_item__7xgF9">
                      <img
                        className="pics-list_itemImage__c7Zca"
                        src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/a_f6nufp"
                        srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/a_f6nufp 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/a_f6nufp 2x"
                        alt="Weight loss plan"
                      />
                      <div>
                        <p className="pics-list_itemTitle__ivCFg">
                          Weight loss plan
                        </p>
                        <p className="pics-list_itemSubtitle___Q10_">
                          A unique exercise plan that fits into your daily
                          schedule and helps see weight loss and tone results
                          quickly.
                        </p>
                      </div>
                    </li>
                    <li className="pics-list_item__7xgF9">
                      <img
                        className="pics-list_itemImage__c7Zca"
                        src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/a_rdbhra"
                        srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/a_rdbhra 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/a_rdbhra 2x"
                        alt="Easy meal plan"
                      />
                      <div>
                        <p className="pics-list_itemTitle__ivCFg">
                          Easy meal plan
                        </p>
                        <p className="pics-list_itemSubtitle___Q10_">
                          A personalized Meal Plan that's as close as possible
                          to the regular diet, enhanced to be healthy and
                          helpful to reach your goals.
                        </p>
                      </div>
                    </li>
                    <li className="pics-list_item__7xgF9">
                      <img
                        className="pics-list_itemImage__c7Zca"
                        src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/a_eisart"
                        srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/a_eisart 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/a_eisart 2x"
                        alt="Coach support"
                      />
                      <div>
                        <p className="pics-list_itemTitle__ivCFg">
                          Coach support
                        </p>
                        <p className="pics-list_itemSubtitle___Q10_">
                          Connect with personal coaches who help with motivation
                          and answer all your questions, and are constantly by
                          your side for fastest and most effective results.{" "}
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="pics-list-with-image_note__Ftij_">
                    <p className="footnote_footnote__CVh5n">
                      Workouts &amp; Coach support are currently available on
                      our mobile apps for Android &amp; iOS
                    </p>
                  </div>
                </div>
                <div className="pics-list-with-image_colImg__9D_RK">
                  <img
                    className="pics-list-with-image_image__pNVIb"
                    src="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_535/v1/weightloss/checkout/affiliates/Illustration_tn1le6.png"
                    srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_535/v1/weightloss/checkout/affiliates/Illustration_tn1le6.png 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_2.0,fl_lossy,q_auto:eco,w_535/v1/weightloss/checkout/affiliates/Illustration_tn1le6.png 2x"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="affiliate-introductory-3-subs-customized-area_plans__PmzxN">
            <div className="content-container_container__DMPhG">
              <div className="affiliate-introductory-3-subs-customized-area_choosePlanGenericContainer__lpOTw">
                <h3 className="choose-plan-generic_choosePlanHeader__ltkDH">
                  Choose Your Plan
                </h3>
                <div className="choose-plan-generic_planListContainer__h_XCr">
                  <div
                    data-plan="affiliates-introductory-3-subs-1-week"
                    className="plan-item-detailed-breakdown_plan__7XzN2"
                    data-price="699"
                    data-selected="false"
                  >
                    <div className="plan-item-detailed-breakdown_planCard__rYk2O">
                      <div className="plan-item-detailed-breakdown_mainContentItemContainer__iutS2">
                        <div className="plan-item-detailed-breakdown_planMainInfo__iMSKp">
                          <div className="plan-item-detailed-breakdown_planName__fZOBk">
                            7-DAY PLAN
                          </div>
                          <div className="plan-item-detailed-breakdown_pricingDetails__HRbwJ">
                            <div className="plan-item-detailed-breakdown_planDescription__VWu_d">
                              <span className="plan-item-detailed-breakdown_planPriceStriked__j8Ur2">
                                $9.99
                              </span>{" "}
                              $6.99 per{" "}
                              <span className="plan-item-detailed-breakdown_singleLine__eWB83">
                                7 days
                              </span>
                            </div>
                            <div className="plan-item-detailed-breakdown_oldPrice__hb2n6">
                              $1.43
                            </div>
                          </div>
                        </div>
                        <div className="plan-item-detailed-breakdown_planPerDay__xV81X">
                          <svg
                            width="165"
                            height="48"
                            viewBox="0 0 165 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="plan-item-detailed-breakdown_priceLabel__l32RD"
                          >
                            <path d="M15.5669 1.57768C16.3234 0.583597 17.5009 0 18.7501 0H215.5039C218.8176 0 221.5039 2.68629 221.5039 6V42C221.5039 45.3137 218.8176 48 215.5039 48H19.7413C17.8675 48 16.1013 47.1246 14.9666 45.6335L1.26892 27.6335C-0.364796 25.4866 -0.364799 22.5134 1.26892 20.3665L15.5669 1.57768Z"></path>
                          </svg>
                          <div className="plan-item-detailed-breakdown_price__lRp3v">
                            <span className="plan-item-detailed-breakdown_currency__tuaBY">
                              $
                            </span>
                            <span className="plan-item-detailed-breakdown_dollars__co2d_">
                              1
                            </span>
                            <span className="plan-item-detailed-breakdown_row__7g_tk">
                              <span className="plan-item-detailed-breakdown_cents__k9YHm">
                                00
                              </span>
                              <span className="plan-item-detailed-breakdown_period__USId5">
                                per day
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-plan="affiliates-introductory-3-subs-1-month"
                    className="plan-item-detailed-breakdown_plan__7XzN2 plan-item-detailed-breakdown_isSelected__dM_Bb plan-item-detailed-breakdown_isMostPopular__FfEpG"
                    data-price="1999"
                    data-selected="true"
                  >
                    <div className="plan-item-detailed-breakdown_planCard__rYk2O plan-item-detailed-breakdown_selectedPlanCard__boNep">
                      <div className="plan-item-detailed-breakdown_mostPopularLabel__Uvphb">
                        MOST POPULAR
                      </div>
                      <div className="plan-item-detailed-breakdown_mainContentItemContainer__iutS2">
                        <div className="plan-item-detailed-breakdown_planMainInfo__iMSKp">
                          <div className="plan-item-detailed-breakdown_planName__fZOBk">
                            1-MONTH PLAN
                          </div>
                          <div className="plan-item-detailed-breakdown_pricingDetails__HRbwJ">
                            <div className="plan-item-detailed-breakdown_planDescription__VWu_d">
                              <span className="plan-item-detailed-breakdown_planPriceStriked__j8Ur2">
                                $28.56
                              </span>{" "}
                              $19.99 per{" "}
                              <span className="plan-item-detailed-breakdown_singleLine__eWB83">
                                1 month
                              </span>
                            </div>
                            <div className="plan-item-detailed-breakdown_oldPrice__hb2n6">
                              $1.02
                            </div>
                          </div>
                        </div>
                        <div className="plan-item-detailed-breakdown_planPerDay__xV81X">
                          <svg
                            width="165"
                            height="48"
                            viewBox="0 0 165 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="plan-item-detailed-breakdown_priceLabel__l32RD"
                          >
                            <path d="M15.5669 1.57768C16.3234 0.583597 17.5009 0 18.7501 0H215.5039C218.8176 0 221.5039 2.68629 221.5039 6V42C221.5039 45.3137 218.8176 48 215.5039 48H19.7413C17.8675 48 16.1013 47.1246 14.9666 45.6335L1.26892 27.6335C-0.364796 25.4866 -0.364799 22.5134 1.26892 20.3665L15.5669 1.57768Z"></path>
                          </svg>
                          <div className="plan-item-detailed-breakdown_price__lRp3v">
                            <span className="plan-item-detailed-breakdown_currency__tuaBY">
                              $
                            </span>
                            <span className="plan-item-detailed-breakdown_dollars__co2d_">
                              0
                            </span>
                            <span className="plan-item-detailed-breakdown_row__7g_tk">
                              <span className="plan-item-detailed-breakdown_cents__k9YHm">
                                71
                              </span>
                              <span className="plan-item-detailed-breakdown_period__USId5">
                                per day
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-plan="affiliates-introductory-3-subs-3-month"
                    className="plan-item-detailed-breakdown_plan__7XzN2"
                    data-price="2999"
                    data-selected="false"
                  >
                    <div className="plan-item-detailed-breakdown_planCard__rYk2O">
                      <div className="plan-item-detailed-breakdown_mainContentItemContainer__iutS2">
                        <div className="plan-item-detailed-breakdown_planMainInfo__iMSKp">
                          <div className="plan-item-detailed-breakdown_planName__fZOBk">
                            3-MONTH PLAN
                          </div>
                          <div className="plan-item-detailed-breakdown_pricingDetails__HRbwJ">
                            <div className="plan-item-detailed-breakdown_planDescription__VWu_d">
                              <span className="plan-item-detailed-breakdown_planPriceStriked__j8Ur2">
                                $42.84
                              </span>{" "}
                              $29.99 per{" "}
                              <span className="plan-item-detailed-breakdown_singleLine__eWB83">
                                3 months
                              </span>
                            </div>
                            <div className="plan-item-detailed-breakdown_oldPrice__hb2n6">
                              $0.51
                            </div>
                          </div>
                        </div>
                        <div className="plan-item-detailed-breakdown_planPerDay__xV81X">
                          <svg
                            width="165"
                            height="48"
                            viewBox="0 0 165 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="plan-item-detailed-breakdown_priceLabel__l32RD"
                          >
                            <path d="M15.5669 1.57768C16.3234 0.583597 17.5009 0 18.7501 0H215.5039C218.8176 0 221.5039 2.68629 221.5039 6V42C221.5039 45.3137 218.8176 48 215.5039 48H19.7413C17.8675 48 16.1013 47.1246 14.9666 45.6335L1.26892 27.6335C-0.364796 25.4866 -0.364799 22.5134 1.26892 20.3665L15.5669 1.57768Z"></path>
                          </svg>
                          <div className="plan-item-detailed-breakdown_price__lRp3v">
                            <span className="plan-item-detailed-breakdown_currency__tuaBY">
                              $
                            </span>
                            <span className="plan-item-detailed-breakdown_dollars__co2d_">
                              0
                            </span>
                            <span className="plan-item-detailed-breakdown_row__7g_tk">
                              <span className="plan-item-detailed-breakdown_cents__k9YHm">
                                36
                              </span>
                              <span className="plan-item-detailed-breakdown_period__USId5">
                                per day
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <form className="promo-code-form_container__BDH9C">
                  <h4 className="promo-code-form_promoHeading___jd5y">
                    Apply promo code
                  </h4>
                  <div className="promo-code-form_content__MnOkx">
                    <div className="promo-code-form_inputContainer__EMxiL">
                      <input
                        placeholder="Enter promo code"
                        className="promo-code-form_input__JFAvI"
                        type="text"
                        name="promo"
                        value=""
                      />
                    </div>
                    <div className="promo-code-form_buttonContainer__PovGx">
                      <button
                        className="promocode-button_buttonWithBorderRadius__BrPAu"
                        disabled=""
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="affiliate-introductory-3-subs-customized-area_buttonContainer__WYZtk">
                <button
                  type="button"
                  className="button-module_button__tsbZB button-module_secondary__ESK0e button-module_pulsing__QJVcT"
                  data-button="checkout-get-plan"
                >
                  GET MY PLAN
                </button>
              </div>
              <div className="affiliate-introductory-3-subs-customized-area_legalContainer__lyFNt">
                <div className="legal-introductory-with-modal_legal__XY_aS">
                  <button className="legal-introductory-with-modal_infoButton__9X9CG">
                    <svg
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="legal-introductory-with-modal_infoIcon__3T9_y"
                    >
                      <path
                        d="M5.5 0C4.5111 0 3.5444 0.293245 2.72215 0.842652C1.89991 1.39206 1.25904 2.17295 0.880605 3.08658C0.502166 4.00021 0.40315 5.00555 0.596076 5.97545C0.789002 6.94536 1.26521 7.83627 1.96447 8.53553C2.66373 9.2348 3.55465 9.711 4.52455 9.90393C5.49446 10.0969 6.49979 9.99784 7.41342 9.6194C8.32705 9.24096 9.10794 8.6001 9.65735 7.77785C10.2068 6.95561 10.5 5.98891 10.5 5C10.5 4.34339 10.3707 3.69321 10.1194 3.08658C9.86813 2.47995 9.49983 1.92876 9.03554 1.46447C8.57124 1.00017 8.02005 0.631876 7.41342 0.380602C6.80679 0.129329 6.15661 0 5.5 0ZM6 7C6 7.13261 5.94732 7.25979 5.85356 7.35355C5.75979 7.44732 5.63261 7.5 5.5 7.5C5.36739 7.5 5.24022 7.44732 5.14645 7.35355C5.05268 7.25979 5 7.13261 5 7V4.5C5 4.36739 5.05268 4.24022 5.14645 4.14645C5.24022 4.05268 5.36739 4 5.5 4C5.63261 4 5.75979 4.05268 5.85356 4.14645C5.94732 4.24022 6 4.36739 6 4.5V7ZM5.5 3.5C5.40111 3.5 5.30444 3.47068 5.22222 3.41574C5.13999 3.36079 5.07591 3.28271 5.03806 3.19134C5.00022 3.09998 4.99032 2.99945 5.00961 2.90246C5.0289 2.80546 5.07652 2.71637 5.14645 2.64645C5.21638 2.57652 5.30547 2.5289 5.40246 2.50961C5.49945 2.49031 5.59998 2.50022 5.69134 2.53806C5.78271 2.5759 5.8608 2.63999 5.91574 2.72222C5.97068 2.80444 6 2.90111 6 3C6 3.13261 5.94732 3.25979 5.85356 3.35355C5.75979 3.44732 5.63261 3.5 5.5 3.5Z"
                        fill="#a3b3c6"
                      ></path>
                    </svg>
                  </button>
                  <span data-testid="regularLegal">
                    To avoid any disruption, you agree that the plan you
                    selected will automatically be extended at the full price
                    for successive renewal periods and you will be charged
                    $28.56 every month. Cancel online in your profile.{" "}
                    <a
                      href="/en/subscription-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Subscription Terms
                    </a>
                    .
                  </span>
                </div>
              </div>
              <div className="affiliate-introductory-3-subs-customized-area_safeCheckout__sFT2D">
                <div className="result_choosePlanSafeCheckout__3AVNz">
                  <span className="affiliate-introductory-3-subs-customized-area_safeCheckoutText__pK88Y">
                    Guaranteed <b>Safe</b> Checkout
                  </span>
                  <img
                    className="result_choosePlanSafeCheckoutCards__b32N_"
                    src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Color_siuuw2"
                    srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Color_siuuw2 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/Color_siuuw2 2x"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="affiliate-introductory-3-subs-customized-area_mealPlan__p_iXW">
            <div className="content-container_container__DMPhG">
              <div className="plan-insights-mealplan-responsive_container__dErcw">
                <h3 className="plan-insights-mealplan-responsive_header__ZjaEH">
                  Personalized meal plan
                </h3>
                <h4 className="plan-insights-mealplan-responsive_subtitle__gkJZK">
                  Fully customizable{" "}
                </h4>
                <div className="plan-insights-mealplan-responsive_cardsContainer__atr8u">
                  <div className="plan-insights-mealplan-responsive_contentRow__gO3Mh">
                    <img
                      className="plan-insights-mealplan-responsive_contentImage__vO7X0"
                      srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/walnut-porridge 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/walnut-porridge 2x"
                      src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/walnut-porridge"
                      alt=""
                    />
                    <div>
                      <div className="plan-insights-mealplan-responsive_contentHeadline__7VTrV">
                        BREAKFAST
                      </div>
                      <div className="plan-insights-mealplan-responsive_contentTitle__RtMHy">
                        Date and walnut porridge
                      </div>
                      <div className="plan-insights-mealplan-responsive_timeAndCaloriesInfo__giJZR">
                        <span className="plan-insights-mealplan-responsive_time__RHXvA">
                          <img
                            className="plan-insights-mealplan-responsive_icon__IBA54"
                            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr 2x"
                            src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr"
                            alt=""
                          />
                          20 min
                        </span>
                        <span className="plan-insights-mealplan-responsive_additionalInfo__hUzrO">
                          <img
                            className="plan-insights-mealplan-responsive_icon__IBA54"
                            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz 2x"
                            src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz"
                            alt=""
                          />
                          468 cal
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="plan-insights-mealplan-responsive_contentRow__gO3Mh">
                    <img
                      className="plan-insights-mealplan-responsive_contentImage__vO7X0"
                      srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/avocado-hummus_pumdew 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/avocado-hummus_pumdew 2x"
                      src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/avocado-hummus_pumdew"
                      alt=""
                    />
                    <div>
                      <div className="plan-insights-mealplan-responsive_contentHeadline__7VTrV">
                        MORNING SNACK
                      </div>
                      <div className="plan-insights-mealplan-responsive_contentTitle__RtMHy">
                        Yummy avocado hummus
                      </div>
                      <div className="plan-insights-mealplan-responsive_timeAndCaloriesInfo__giJZR">
                        <span className="plan-insights-mealplan-responsive_time__RHXvA">
                          <img
                            className="plan-insights-mealplan-responsive_icon__IBA54"
                            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr 2x"
                            src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr"
                            alt=""
                          />
                          10 min
                        </span>
                        <span className="plan-insights-mealplan-responsive_additionalInfo__hUzrO">
                          <img
                            className="plan-insights-mealplan-responsive_icon__IBA54"
                            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz 2x"
                            src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz"
                            alt=""
                          />
                          110 cal
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="plan-insights-mealplan-responsive_contentRow__gO3Mh">
                    <img
                      className="plan-insights-mealplan-responsive_contentImage__vO7X0"
                      srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/baked-cod_ilntmj 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/baked-cod_ilntmj 2x"
                      src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/baked-cod_ilntmj"
                      alt=""
                    />
                    <div>
                      <div className="plan-insights-mealplan-responsive_contentHeadline__7VTrV">
                        LUNCH
                      </div>
                      <div className="plan-insights-mealplan-responsive_contentTitle__RtMHy">
                        Baked cod with beans
                      </div>
                      <div className="plan-insights-mealplan-responsive_timeAndCaloriesInfo__giJZR">
                        <span className="plan-insights-mealplan-responsive_time__RHXvA">
                          <img
                            className="plan-insights-mealplan-responsive_icon__IBA54"
                            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr 2x"
                            src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr"
                            alt=""
                          />
                          40 min
                        </span>
                        <span className="plan-insights-mealplan-responsive_additionalInfo__hUzrO">
                          <img
                            className="plan-insights-mealplan-responsive_icon__IBA54"
                            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz 2x"
                            src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz"
                            alt=""
                          />
                          610 cal
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="plan-insights-mealplan-responsive_contentRow__gO3Mh">
                    <img
                      className="plan-insights-mealplan-responsive_contentImage__vO7X0"
                      srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/banana-toast_mvqst8 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/banana-toast_mvqst8 2x"
                      src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/banana-toast_mvqst8"
                      alt=""
                    />
                    <div>
                      <div className="plan-insights-mealplan-responsive_contentHeadline__7VTrV">
                        EVENING SNACK
                      </div>
                      <div className="plan-insights-mealplan-responsive_contentTitle__RtMHy">
                        Banana almond toast
                      </div>
                      <div className="plan-insights-mealplan-responsive_timeAndCaloriesInfo__giJZR">
                        <span className="plan-insights-mealplan-responsive_time__RHXvA">
                          <img
                            className="plan-insights-mealplan-responsive_icon__IBA54"
                            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr 2x"
                            src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr"
                            alt=""
                          />
                          5 min
                        </span>
                        <span className="plan-insights-mealplan-responsive_additionalInfo__hUzrO">
                          <img
                            className="plan-insights-mealplan-responsive_icon__IBA54"
                            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz 2x"
                            src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz"
                            alt=""
                          />
                          190 cal
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="plan-insights-mealplan-responsive_contentRow__gO3Mh">
                    <img
                      className="plan-insights-mealplan-responsive_contentImage__vO7X0"
                      srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/shakshuka_kamawx 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/shakshuka_kamawx 2x"
                      src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/meal-plans/shakshuka_kamawx"
                      alt=""
                    />
                    <div>
                      <div className="plan-insights-mealplan-responsive_contentHeadline__7VTrV">
                        DINNER
                      </div>
                      <div className="plan-insights-mealplan-responsive_contentTitle__RtMHy">
                        Veggie shakshuka
                      </div>
                      <div className="plan-insights-mealplan-responsive_timeAndCaloriesInfo__giJZR">
                        <span className="plan-insights-mealplan-responsive_time__RHXvA">
                          <img
                            className="plan-insights-mealplan-responsive_icon__IBA54"
                            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr 2x"
                            src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr"
                            alt=""
                          />
                          20 min
                        </span>
                        <span className="plan-insights-mealplan-responsive_additionalInfo__hUzrO">
                          <img
                            className="plan-insights-mealplan-responsive_icon__IBA54"
                            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz 2x"
                            src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz"
                            alt=""
                          />
                          575 cal
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="affiliate-introductory-3-subs-customized-area_exercises__ZI4CR">
            <div className="content-container_container__DMPhG">
              <div className="plan-insights-exercises-responsive_container__PKV85">
                <h3 className="plan-insights-exercises-responsive_header__VaTok">
                  Easy-to-follow exercises
                </h3>
                <h4 className="plan-insights-exercises-responsive_subtitle__U8nyM">
                  Personalized routines{" "}
                </h4>
                <div className="plan-insights-exercises-responsive_cardsContainer__3KQPJ">
                  <div className="plan-insights-exercises-responsive_contentRow___hHkd">
                    <img
                      className="plan-insights-exercises-responsive_contentImage__kC3Z6"
                      srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_tetwc5.jpg 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_tetwc5.jpg 2x"
                      src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_tetwc5.jpg"
                      alt=""
                    />
                    <div className="plan-insights-exercises-responsive_contentText__H2Zd6">
                      <div className="plan-insights-exercises-responsive_contentTitle__60LZJ">
                        Flat belly
                      </div>
                      <div className="plan-insights-exercises-responsive_timeAndCaloriesInfo__HnoF5">
                        <span className="plan-insights-exercises-responsive_time__m6q_4">
                          <img
                            className="plan-insights-exercises-responsive_icon__55O6N"
                            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr 2x"
                            src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr"
                            alt=""
                          />
                          7 min
                        </span>
                        <span className="plan-insights-exercises-responsive_additionalInfo__iuWsR">
                          <img
                            className="plan-insights-exercises-responsive_icon__55O6N"
                            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz 2x"
                            src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz"
                            alt=""
                          />
                          repeat 4 times
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="plan-insights-exercises-responsive_contentRow___hHkd">
                    <img
                      className="plan-insights-exercises-responsive_contentImage__kC3Z6"
                      srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_db59gz.jpg 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_db59gz.jpg 2x"
                      src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_db59gz.jpg"
                      alt=""
                    />
                    <div className="plan-insights-exercises-responsive_contentText__H2Zd6">
                      <div className="plan-insights-exercises-responsive_contentTitle__60LZJ">
                        Springy butt
                      </div>
                      <div className="plan-insights-exercises-responsive_timeAndCaloriesInfo__HnoF5">
                        <span className="plan-insights-exercises-responsive_time__m6q_4">
                          <img
                            className="plan-insights-exercises-responsive_icon__55O6N"
                            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr 2x"
                            src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr"
                            alt=""
                          />
                          7 min
                        </span>
                        <span className="plan-insights-exercises-responsive_additionalInfo__iuWsR">
                          <img
                            className="plan-insights-exercises-responsive_icon__55O6N"
                            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz 2x"
                            src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz"
                            alt=""
                          />
                          repeat 4 times
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="plan-insights-exercises-responsive_contentRow___hHkd">
                    <img
                      className="plan-insights-exercises-responsive_contentImage__kC3Z6"
                      srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_4_g53mkv.jpg 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_4_g53mkv.jpg 2x"
                      src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_4_g53mkv.jpg"
                      alt=""
                    />
                    <div className="plan-insights-exercises-responsive_contentText__H2Zd6">
                      <div className="plan-insights-exercises-responsive_contentTitle__60LZJ">
                        Shoulders and arms
                      </div>
                      <div className="plan-insights-exercises-responsive_timeAndCaloriesInfo__HnoF5">
                        <span className="plan-insights-exercises-responsive_time__m6q_4">
                          <img
                            className="plan-insights-exercises-responsive_icon__55O6N"
                            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr 2x"
                            src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr"
                            alt=""
                          />
                          3 min
                        </span>
                        <span className="plan-insights-exercises-responsive_additionalInfo__iuWsR">
                          <img
                            className="plan-insights-exercises-responsive_icon__55O6N"
                            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz 2x"
                            src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz"
                            alt=""
                          />
                          repeat 4 times
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="plan-insights-exercises-responsive_contentRow___hHkd">
                    <img
                      className="plan-insights-exercises-responsive_contentImage__kC3Z6"
                      srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_3_kxmucn.jpg 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_3_kxmucn.jpg 2x"
                      src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_3_kxmucn.jpg"
                      alt=""
                    />
                    <div className="plan-insights-exercises-responsive_contentText__H2Zd6">
                      <div className="plan-insights-exercises-responsive_contentTitle__60LZJ">
                        Back &amp; chest
                      </div>
                      <div className="plan-insights-exercises-responsive_timeAndCaloriesInfo__HnoF5">
                        <span className="plan-insights-exercises-responsive_time__m6q_4">
                          <img
                            className="plan-insights-exercises-responsive_icon__55O6N"
                            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr 2x"
                            src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr"
                            alt=""
                          />
                          3 min
                        </span>
                        <span className="plan-insights-exercises-responsive_additionalInfo__iuWsR">
                          <img
                            className="plan-insights-exercises-responsive_icon__55O6N"
                            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz 2x"
                            src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz"
                            alt=""
                          />
                          repeat 4 times
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="plan-insights-exercises-responsive_contentRow___hHkd">
                    <img
                      className="plan-insights-exercises-responsive_contentImage__kC3Z6"
                      srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_2_zapvba.jpg 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_2_zapvba.jpg 2x"
                      src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/weightloss/checkout/affiliates/Pic_copy_2_zapvba.jpg"
                      alt=""
                    />
                    <div className="plan-insights-exercises-responsive_contentText__H2Zd6">
                      <div className="plan-insights-exercises-responsive_contentTitle__60LZJ">
                        Dumbbell exercises
                      </div>
                      <div className="plan-insights-exercises-responsive_timeAndCaloriesInfo__HnoF5">
                        <span className="plan-insights-exercises-responsive_time__m6q_4">
                          <img
                            className="plan-insights-exercises-responsive_icon__55O6N"
                            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr 2x"
                            src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/icon_uziamr"
                            alt=""
                          />
                          3 min
                        </span>
                        <span className="plan-insights-exercises-responsive_additionalInfo__iuWsR">
                          <img
                            className="plan-insights-exercises-responsive_icon__55O6N"
                            srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz 2x"
                            src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/v1/challenges/plan-insights/fire_c8v1bz"
                            alt=""
                          />
                          repeat 4 times
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="checkout-generated-universal_feedbacksSection__OlUPO">
          <div className="checkout-generated-universal_container__oV9Mx">
            <div>
              <div className="app-store-reviews_appStoreReviews__OZ8dB app-store-reviews_isAdjustedToDesktop__E9dnw">
                <h1 className="app-store-reviews_appStoreReviewsTitle__K85Kb">
                  Users love our plans
                </h1>
                <div className="app-store-reviews_appStoreReviewsSubtitle__6crPQ">
                  Here's what people are saying about BetterMe
                </div>
                <div className="app-store-reviews_appStoreReview__bEJnK">
                  <div className="app-store-reviews_title__McvZz">
                    <div className="app-store-reviews_titleGroup__ZqytY">
                      <h3 className="app-store-reviews_titleText__UhR6E">
                        How the program helps me
                      </h3>
                      <span className="app-store-reviews_dateNameText__tgusm">
                        7 July
                      </span>
                    </div>
                    <div className="app-store-reviews_titleGroup__ZqytY">
                      <div>
                        <img
                          src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Star_5start_cgispk"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Star_5start_cgispk"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Star_5start_cgispk"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Star_5start_cgispk"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Star_5start_cgispk"
                          alt=""
                        />
                      </div>
                      <span className="app-store-reviews_dateNameText__tgusm">
                        IAmMoorer
                      </span>
                    </div>
                  </div>
                  <div className="app-store-reviews_reviewExpandable__UCj2D app-store-reviews_review__MS3Ir">
                    <p>
                      The hardest part for me was to have a plan and stick with
                      it.... Better Me has it all laid out. The MOST important
                      lesson I have learned though.....even though I might feel
                      that I “don’t eat a lot” counting those calories will
                      reveal your TRUTH. What you eat is a fraction of the
                      battle....count those calories and WIN the battle.
                      <br></br>
                    </p>
                    <button className="app-store-reviews_expandButton__aIg_C">
                      more
                    </button>
                  </div>
                </div>
                <div className="app-store-reviews_appStoreReview__bEJnK">
                  <div className="app-store-reviews_title__McvZz">
                    <div className="app-store-reviews_titleGroup__ZqytY">
                      <h3 className="app-store-reviews_titleText__UhR6E">
                        Thank You!
                      </h3>
                      <span className="app-store-reviews_dateNameText__tgusm">
                        24 June
                      </span>
                    </div>
                    <div className="app-store-reviews_titleGroup__ZqytY">
                      <div>
                        <img
                          src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Star_5start_cgispk"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Star_5start_cgispk"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Star_5start_cgispk"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Star_5start_cgispk"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Star_5start_cgispk"
                          alt=""
                        />
                      </div>
                      <span className="app-store-reviews_dateNameText__tgusm">
                        Onya Jones
                      </span>
                    </div>
                  </div>
                  <div className="app-store-reviews_reviewExpandable__UCj2D app-store-reviews_review__MS3Ir">
                    <p>
                      Ok, so whoever made this a thing I thank you so much!
                      That’s because this is making me fit and I think if I do
                      it for the while month or maybe even just this whole week
                      I will most definitely lose some pounds and burn some
                      belly fat. I mean it is a little tiering but anywhere they
                      have good exercises then it will tire you and you will be
                      tired afterwards. But I get support from my mom because we
                      do it together so it is fun/funny for us. Thank you and to
                      you reading this have a great day. <br></br>
                    </p>
                    <button className="app-store-reviews_expandButton__aIg_C">
                      more
                    </button>
                  </div>
                </div>
                <div className="app-store-reviews_appStoreReview__bEJnK">
                  <div className="app-store-reviews_title__McvZz">
                    <div className="app-store-reviews_titleGroup__ZqytY">
                      <h3 className="app-store-reviews_titleText__UhR6E">
                        Convenient for moms
                      </h3>
                      <span className="app-store-reviews_dateNameText__tgusm">
                        18 Aug
                      </span>
                    </div>
                    <div className="app-store-reviews_titleGroup__ZqytY">
                      <div>
                        <img
                          src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Star_5start_cgispk"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Star_5start_cgispk"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Star_5start_cgispk"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Star_5start_cgispk"
                          alt=""
                        />
                        <img
                          src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/Star_5start_cgispk"
                          alt=""
                        />
                      </div>
                      <span className="app-store-reviews_dateNameText__tgusm">
                        afii20
                      </span>
                    </div>
                  </div>
                  <div className="app-store-reviews_reviewExpandable__UCj2D app-store-reviews_review__MS3Ir">
                    <p>
                      I’ve never really been into sports, and you don’t have
                      that much time if you’re a stay at home mom. I have
                      understood that I really need to work out when carrying my
                      infant around the house started to hurt my back. So I
                      downloaded Betterme and started doing shoulder/back
                      routines. This may sound unbelievable but after a week my
                      back pain disappeared and I could hold my baby for a
                      longer time. I performed the exercises for 10 to 15
                      minutes and got unbelievable results. That happened a few
                      months ago. In some time, I deleted the app, thinking I
                      could find something better without paying. Obviously, I
                      was wrong and did no exercise after deleting the app. So
                      I’m installing it again and look forward to working out!
                      <br></br>
                    </p>
                    <button className="app-store-reviews_expandButton__aIg_C">
                      more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="checkout-generated-universal_legalSection__nG2MW">
          <div className="checkout-generated-universal_container__oV9Mx">
            <div className="checkout-generated-universal_desktopOnly__aA0Qt">
              <img
                className="checkout-generated-universal_legalSectionBgLeft__XMqeJ"
                src="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_270/v1/weightloss/checkout/pepper_j0p3z6.png"
                srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_270/v1/weightloss/checkout/pepper_j0p3z6.png 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_2.0,fl_lossy,q_auto:eco,w_270/v1/weightloss/checkout/pepper_j0p3z6.png 2x"
                alt="Pepper"
              />
              <img
                className="checkout-generated-universal_legalSectionBgRight__jlACf"
                src="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_250/v1/weightloss/checkout/avocado_ctuoci.png"
                srcSet="https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_1.0,fl_lossy,q_auto:eco,w_250/v1/weightloss/checkout/avocado_ctuoci.png 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/c_fit,dpr_2.0,fl_lossy,q_auto:eco,w_250/v1/weightloss/checkout/avocado_ctuoci.png 2x"
                alt="Avocado"
              />
              <div className="checkout-generated-universal_faq__qz2hk">
                <div className="faq-accordion_container__leW8s">
                  <span className="faq-accordion_title__85xZa">
                    People Often Ask
                  </span>
                  <ul className="faq-accordion_questionsList__yRzlP">
                    <div className="faq-accordion_faqItem__8PP8i">
                      <div className="faq-accordion_faqQuestion__Lyz_T">
                        I’m worried that I’ll quit the Meal Plan halfway
                        <div className="faq-accordion_faqItemBtn__0msy0">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="faq-accordion_faqItemBtnIcon__phkTC"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.72413 7.64458C5.15261 7.19464 5.84732 7.19464 6.2758 7.64458L12.0331 13.6901L17.8167 7.61687C18.2452 7.16694 18.9399 7.16694 19.3684 7.61687C19.7969 8.06681 19.7969 8.7963 19.3684 9.24624L13.5847 15.3195L13.5925 15.3277L12.0409 16.957L4.72413 9.27394C4.29565 8.824 4.29565 8.09451 4.72413 7.64458Z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="faq-accordion_faqAnswer__Qc5HM">
                        <div className="faq-accordion_faqAnswerText__6jHiw">
                          We totally get it, and that’s why we made sure that
                          our Meal Plans are as similar to the regular menu as
                          possible. We believe that even those who live off fast
                          food will be satisfied with both the meals and the
                          results, and never feel hungry.
                        </div>
                      </div>
                    </div>
                    <div className="faq-accordion_faqItem__8PP8i">
                      <div className="faq-accordion_faqQuestion__Lyz_T">
                        I don’t want to give up my sweets!
                        <div className="faq-accordion_faqItemBtn__0msy0">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="faq-accordion_faqItemBtnIcon__phkTC"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.72413 7.64458C5.15261 7.19464 5.84732 7.19464 6.2758 7.64458L12.0331 13.6901L17.8167 7.61687C18.2452 7.16694 18.9399 7.16694 19.3684 7.61687C19.7969 8.06681 19.7969 8.7963 19.3684 9.24624L13.5847 15.3195L13.5925 15.3277L12.0409 16.957L4.72413 9.27394C4.29565 8.824 4.29565 8.09451 4.72413 7.64458Z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="faq-accordion_faqAnswer__Qc5HM">
                        <div className="faq-accordion_faqAnswerText__6jHiw">
                          And you don't have to. We know that it’s hard to get
                          rid of the sweet tooth, and included sweet dishes into
                          the meal plan. We’ve picked balanced sweets.
                        </div>
                      </div>
                    </div>
                    <div className="faq-accordion_faqItem__8PP8i">
                      <div className="faq-accordion_faqQuestion__Lyz_T">
                        Can I lose weight without working out?
                        <div className="faq-accordion_faqItemBtn__0msy0">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="faq-accordion_faqItemBtnIcon__phkTC"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.72413 7.64458C5.15261 7.19464 5.84732 7.19464 6.2758 7.64458L12.0331 13.6901L17.8167 7.61687C18.2452 7.16694 18.9399 7.16694 19.3684 7.61687C19.7969 8.06681 19.7969 8.7963 19.3684 9.24624L13.5847 15.3195L13.5925 15.3277L12.0409 16.957L4.72413 9.27394C4.29565 8.824 4.29565 8.09451 4.72413 7.64458Z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="faq-accordion_faqAnswer__Qc5HM">
                        <div className="faq-accordion_faqAnswerText__6jHiw">
                          Sure thing! Nutrition is the most important element in
                          weight loss. However if you incorporate workouts, your
                          body will get more toned and defined. We know it’s a
                          lot to take on, and the workouts are extremely easy,
                          suitable for first-timers, and will take up barely any
                          time.
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="checkout-generated-universal_moneyBackGuarantee__Mmeoa">
              <div className="money-back-guarantee_container__cBo6E">
                <div className="money-back-guarantee_content__HypPy">
                  <div className="money-back-guarantee_contentInner__Kxh3o">
                    <span className="money-back-guarantee_title__IJrzn">
                      30-Day Money-Back Guarantee
                    </span>
                    <span className="money-back-guarantee_text__k4GqU">
                      <p>
                        We believe that our plan may work for you and you’ll get
                        visible results in 4 weeks! We even are ready to return
                        your money back if you don’t see visible results and can
                        demonstrate that you followed our plan. Find more about
                        applicable limitations in our{" "}
                        <a
                          href="/money-back-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          money-back policy
                        </a>
                        .<br></br>
                      </p>
                    </span>
                  </div>
                  <svg
                    className="money-back-guarantee_stamp__nGAGn"
                    width="64"
                    height="89"
                    viewBox="0 0 64 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.5235 64.4537C28.0714 64.0237 27.2534 63.7442 26.4569 63.7442C26.0479 63.7442 25.6604 63.8302 25.359 63.9592C24.6917 64.2817 23.9598 64.4537 23.2063 64.4537C21.3119 64.4537 19.5898 63.4432 18.7071 61.8092C18.2766 61.0137 17.0926 60.3472 16.1024 60.3472C16.0163 60.3472 15.9301 60.3472 15.8656 60.3687C15.6503 60.3902 15.435 60.4117 15.2197 60.4117C13.5837 60.4117 12.0768 59.6162 11.1296 58.3691L2.90625 80.9229L16.5329 74.5803L22.8834 88.1899L31.0422 65.7867C30.1165 65.5502 29.2339 65.1202 28.5235 64.4537Z"
                      className="money-back-guarantee_stampPath__NYWnj"
                    ></path>
                    <path
                      d="M48.8664 60.3697C48.6511 60.3697 48.4358 60.3482 48.2206 60.3267C48.1345 60.3267 48.0699 60.3052 47.9838 60.3052C46.9935 60.3052 45.8095 60.9717 45.379 61.7672C44.4964 63.4012 42.7742 64.4117 40.8798 64.4117C40.1264 64.4117 39.3945 64.2397 38.7271 63.9172C38.4258 63.7882 38.0383 63.7022 37.6293 63.7022C36.8328 63.7022 36.0147 63.9817 35.5627 64.4117C34.8523 65.0782 33.9912 65.5298 33.0225 65.7018L41.1812 88.105L47.5317 74.4953L61.1583 80.8379L52.935 58.2842C51.9878 59.5742 50.4809 60.3697 48.8664 60.3697Z"
                      className="money-back-guarantee_stampPath__NYWnj"
                    ></path>
                    <path
                      d="M63.11 29.779C61.9233 28.5695 61.5631 26.3172 62.3047 24.7948C63.0464 23.2724 62.4107 21.3747 60.9062 20.5822C59.4016 19.7898 58.3633 17.7669 58.5752 16.0985C58.8083 14.4302 57.6004 12.8244 55.9263 12.5116C54.2523 12.1988 52.6206 10.593 52.3027 8.94551C51.9849 7.29801 50.3532 6.10932 48.6579 6.33871C46.9627 6.56811 44.9072 5.52539 44.1019 4.04473C43.2967 2.56408 41.3683 1.9593 39.8214 2.66835C38.2745 3.39825 36.0071 3.04373 34.7568 1.87588C33.5277 0.708039 31.4934 0.708039 30.2432 1.87588C29.0141 3.04373 26.7255 3.39825 25.1786 2.66835C23.6317 1.93844 21.7033 2.56408 20.8981 4.04473C20.0928 5.52539 18.0373 6.54726 16.3421 6.33871C14.6468 6.10932 13.0151 7.29801 12.6973 8.94551C12.3794 10.593 10.7477 12.1988 9.07366 12.5116C7.3996 12.8244 6.19172 14.4302 6.42482 16.0985C6.65792 17.7669 5.59838 19.7898 4.09384 20.5822C2.5893 21.3747 1.97478 23.2724 2.69526 24.7948C3.43694 26.3172 3.07669 28.5486 1.89001 29.779C0.70333 30.9886 0.70333 32.9906 1.89001 34.221C3.07669 35.4305 3.43694 37.6828 2.69526 39.2052C1.95359 40.7275 2.5893 42.6253 4.09384 43.4178C5.59838 44.2102 6.63673 46.2331 6.42482 47.9014C6.19172 49.5698 7.3996 51.1756 9.07366 51.4884C10.7477 51.8012 12.3794 53.407 12.6973 55.0545C13.0151 56.702 14.6468 57.8907 16.3421 57.6613C18.0373 57.4319 20.0928 58.4746 20.8981 59.9553C21.7033 61.4359 23.6317 62.0407 25.1786 61.3317C26.7255 60.6017 28.9929 60.9563 30.2432 62.1241C31.4723 63.292 33.5066 63.292 34.7568 62.1241C35.9859 60.9563 38.2745 60.6017 39.8214 61.3317C41.3683 62.0616 43.2967 61.4359 44.1019 59.9553C44.9072 58.4746 46.9627 57.4527 48.6579 57.6613C50.3532 57.8907 51.9849 56.702 52.3027 55.0545C52.6206 53.407 54.2523 51.8012 55.9263 51.4884C57.6004 51.1756 58.8083 49.5698 58.5752 47.9014C58.3421 46.2331 59.4016 44.2102 60.9062 43.4178C62.4107 42.6253 63.0252 40.7275 62.3047 39.2052C61.5631 37.6828 61.9233 35.4514 63.11 34.221C64.2967 32.9906 64.2967 30.9886 63.11 29.779Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M63.0959 29.8606C61.8904 28.6136 61.5244 26.2916 62.2778 24.7221C63.0313 23.1526 62.3855 21.1961 60.8571 20.3791C59.3286 19.562 58.2738 17.4765 58.4891 15.7565C58.7259 14.0365 57.4988 12.381 55.7982 12.0585C54.0975 11.736 52.44 10.0805 52.1171 8.38198C51.7941 6.68347 50.1366 5.45796 48.4144 5.69446C46.6922 5.93097 44.6041 4.85596 43.7861 3.32945C42.968 1.80294 41.0091 1.17943 39.4376 1.91044C37.8661 2.66294 35.5627 2.29744 34.2926 1.09344C33.0441 -0.110572 30.9775 -0.110572 29.7074 1.09344C28.4588 2.29744 26.1339 2.66294 24.5624 1.91044C22.9909 1.15793 21.032 1.80294 20.2139 3.32945C19.3959 4.85596 17.3078 5.90947 15.5856 5.69446C13.8634 5.45796 12.2059 6.68347 11.8829 8.38198C11.56 10.0805 9.90245 11.736 8.20182 12.0585C6.50118 12.381 5.27413 14.0365 5.51093 15.7565C5.74773 17.4765 4.67137 19.562 3.14295 20.3791C1.61453 21.1961 0.990249 23.1526 1.72217 24.7221C2.47562 26.2916 2.10965 28.5921 0.904137 29.8606C-0.301379 31.1076 -0.301379 33.1716 0.904137 34.4402C2.10965 35.6872 2.47562 38.0092 1.72217 39.5787C0.968722 41.1482 1.61453 43.1047 3.14295 43.9217C4.67137 44.7387 5.7262 46.8242 5.51093 48.5442C5.27413 50.2642 6.50118 51.9198 8.20182 52.2423C9.90245 52.5648 11.56 54.2203 11.8829 55.9188C12.2059 57.6173 13.8634 58.8428 15.5856 58.6063C17.3078 58.3698 19.3959 59.4448 20.2139 60.9713C21.032 62.4978 22.9909 63.1213 24.5624 62.3903C26.1339 61.6378 28.4373 62.0033 29.7074 63.2073C30.9559 64.4113 33.0225 64.4113 34.2926 63.2073C35.5412 62.0033 37.8661 61.6378 39.4376 62.3903C41.0091 63.1428 42.968 62.4978 43.7861 60.9713C44.6041 59.4448 46.6922 58.3913 48.4144 58.6063C50.1366 58.8428 51.7941 57.6173 52.1171 55.9188C52.44 54.2203 54.0975 52.5648 55.7982 52.2423C57.4988 51.9198 58.7259 50.2642 58.4891 48.5442C58.2523 46.8242 59.3286 44.7387 60.8571 43.9217C62.3855 43.1047 63.0098 41.1482 62.2778 39.5787C61.5244 38.0092 61.8904 35.7087 63.0959 34.4402C64.3014 33.1716 64.3014 31.1076 63.0959 29.8606ZM32.0323 56.8648C18.3841 56.8648 7.27615 45.7707 7.27615 32.1396C7.27615 18.5085 18.3841 7.41448 32.0323 7.41448C45.6805 7.41448 56.7884 18.5085 56.7884 32.1396C56.7884 45.7707 45.6805 56.8648 32.0323 56.8648Z"
                      className="money-back-guarantee_stampPath__NYWnj"
                    ></path>
                    <path
                      d="M32.0321 9.58594C19.5679 9.58594 9.4502 19.691 9.4502 32.1396C9.4502 44.5883 19.5679 54.6934 32.0321 54.6934C44.4963 54.6934 54.614 44.5883 54.614 32.1396C54.614 19.691 44.4963 9.58594 32.0321 9.58594ZM46.0893 24.3566L28.6308 46.3728C28.0066 47.1468 26.9517 47.1898 26.2844 46.4803L16.2958 35.7302C15.6069 34.9992 15.65 33.8167 16.3389 33.1287L19.4172 30.0541C20.1276 29.3446 21.2686 29.3446 21.979 30.0541L26.4135 34.4832L27.7052 35.7732L28.7815 34.3327L39.7819 19.691C40.3846 18.8955 41.5256 18.745 
      42.3221 19.3255L45.7449 21.8841C46.5629 22.4431 46.7136 23.5826 46.0893 24.3566Z"
                      className="money-back-guarantee_stampPath__NYWnj"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="checkout-generated-universal_aboveButtonElement__w3y2T">
              <div className="checkout-generated-universal_underButtonLegalText__R2UTs">
                <span data-testid="akaTrialLegalTextFull">
                  <b>PLEASE NOTE:</b> After your 1-Month introductory offer,
                  unless you cancel online in your profile before the end of
                  then-current period, your plan will automatically convert to
                  our 1-Month subscription plan at a non-discounted price and
                  you will be charged $28.56 each month before you cancel.
                  Subscriptions renew automatically at the end of each period
                  unless you cancel online in your profile. If you are unsure
                  how to cancel, visit our
                  <a
                    href="/en/subscription-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Subscription Terms
                  </a>
                  . Prepayment of total plan cost required. You will need an
                  Android or iOS mobile phone to access the full version of the
                  product. You may want to take a screenshot of this information
                  and save it.
                </span>
              </div>
            </div>
            <div className="checkout-generated-universal_paymentButton__xsasU">
              <button
                type="button"
                className="button-module_button__tsbZB button-module_secondary__ESK0e"
                databutton="checkout-get-plan"
              >
                GET MY PLAN
              </button>
            </div>
            <div className="checkout-generated-universal_legal__jgz9Z">
              <div className="checkout-generated-universal_legalAddress__IiW_I">
                Themistokli Dervi 39, 1st floor, Office 104, 1066, Nicosia,
                Cyprus.
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="page_sidebarBackdrop__0CPrH">
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
      </div>
    </div>
  );
};

export default checkout;
