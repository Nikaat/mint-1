import React from "react";
import { connect } from "react-redux";

import classes from "./Login.module.css";
import * as actionTypes from "../../redux/actions/actionTypes";
import * as actionCreators from "../../redux/actions";

const Login = (props) => {
  return (
    <div className={classes.PageContainer} data-page="email" id="page">
      <div className={classes.EmailPageMobileContent}>
        <main className={classes.EmailPageContainer}>
          <form className={classes.EmailGeneratedForm} noValidate="">
            <div className={classes.EmailGeneratedContent}>
              <div className={classes.EmailGeneratedInstruction}>
                <p>
                  <b>بارداری سریع</b> با مینت <br></br>
                </p>
              </div>
              <div className={classes.EmailGeneratedInputRow}>
                <input
                  className={classes.EmailGeneratedInput}
                  autoComplete="off"
                  placeholder="شماره موبایل یا ایمیلتون رو وارد کنید"
                  value={props.phoneNumber}
                  onChange={(event) =>
                    props.onInputLoginChange(event.target.value)
                  }
                />
              </div>
              <div className={classes.EmailGeneratedTip}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={classes.LockIcon}
                >
                  <path
                    d="M20 12c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z"
                    fill="#CACACA"
                  ></path>
                </svg>
                <span className={classes.EmailGeneratedTipText}>
                  نام کاربری، شماره موبایل یا ایمیل شما خواهد بود و برای دریافت
                  برنامه باید با یکی از این موارد، وارد مینت بشید.
                </span>
              </div>
            </div>
            <div className={classes.KeyboardFooter}>
              <button
                className={classes.WideButton}
                onClick={() => props.clicked()}
              >
                دریافت برنامه
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    phoneNumber: state.checkout.phoneNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInputLoginChange: (value) =>
      dispatch({ type: actionTypes.ON_LOGIN_INPUT_CHANGE, value: value }),
    clicked: () => dispatch(actionCreators.purchase()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
