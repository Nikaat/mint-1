import React from "react";

import classes from "./Login.module.css";

const Login = (props) => {
  return (
    <div className={classes.PageContainer} data-page="email" id="page">
      <div className={classes.EmailPageMobileContent}>
        <main className={classes.EmailPageContainer}>
          <form className={classes.EmailGeneratedForm} noValidate="">
            <div className={classes.EmailGeneratedContent}>
              <div className={classes.EmailGeneratedInstruction}>
                <p>
                  Enter your email to learn how to <b>lose weight</b> with
                  BetterMe<br></br>
                </p>
              </div>
              <div className={classes.EmailGeneratedInputRow}>
                <input
                  className={classes.EmailGeneratedInput}
                  autoComplete="off"
                  type="email"
                  name="email"
                  placeholder="Enter your email to get your plan"
                  value=""
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
                  We respect your privacy and are committed to protecting your
                  personal data. We’ll email you a copy of your results for
                  convenient access.
                </span>
              </div>
            </div>
            <div className={classes.KeyboardFooter}>
              <button
                className={classes.GreenWideButton}
                data-button="email-form-submit"
                type="submit"
              >
                Get my plan
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Login;
