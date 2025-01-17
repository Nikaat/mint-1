import React from "react";

import classes from "./highlights.module.css";
import Graph from "./graph/graph";

const highlights = (props) => {
  return (
    <div className={classes.HighlightsContainer}>
      <div className={`${classes.Container} ${classes.IsShown}`}>
        <div className={classes.SubContainer}>
          <div className={classes.LeftContainer}>
            <h3 className={classes.Title}>Get Excited!</h3>
            <p className={classes.Text}>
              Start today, follow the plan, and you should{" "}
              <span className={classes.AnimationLabel1}>Lose 5 kg </span>{" "}
              <span className={classes.AnimationLabel2}>by</span>{" "}
              <span className={classes.AnimationLabel3}>January 2023</span>
            </p>
            <Graph />
            <p className={classes.DisclaimerText}>
              *Based on the data of users who log their progress in the app.
              Consult your physician first. The chart is a non-customized
              illustration and results may vary
            </p>
          </div>
          <div class="purchase-personalized-highlights_divider__jmla7"></div>
          <div class="purchase-personalized-highlights_rightContainer__0gI9Q">
            <img
              src="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/cwbwblyucnqrzxrnml8y"
              srcset="https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_1.0,fl_lossy,q_auto:eco/cwbwblyucnqrzxrnml8y 1x, https://res.cloudinary.com/drhg6wpcy/image/upload/dpr_2.0,fl_lossy,q_auto:eco/cwbwblyucnqrzxrnml8y 2x"
              alt=""
              class="purchase-personalized-highlights_image__02Wg5 purchase-personalized-highlights_isShown__1Mhku"
            />
            <div class="purchase-personalized-highlights_listContainer__vn7mF">
              <div class="purchase-personalized-list_container__szgYD purchase-personalized-list_isShown__ms4b0">
                <ul class="purchase-personalized-list_list__gT_ov">
                  <li class="purchase-personalized-list_item__iOpXE">
                    <div class="purchase-personalized-list_iconContainer__YTH5D">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.871 12.2451C18.871 10.6933 18.4531 9.23253 17.7124 7.98282L16.2765 9.41875C16.6944 10.2753 16.9261 11.2271 16.9261 12.2451C16.9261 15.8369 14.0046 18.7336 10.4376 18.7336C6.86641 18.7336 3.94491 15.8163 3.94491 12.2451C3.94491 8.67802 6.86641 5.75652 10.4335 5.75652C11.4514 5.75652 12.4032 5.98826 13.2598 6.40621L14.6998 4.97028C13.4501 4.22956 11.9894 3.81161 10.4376 3.81161C5.77809 3.81161 2 7.5897 2 12.2451C2 14.7486 3.08832 16.9956 4.82633 18.5267L3.24971 22.1434C3.15867 22.3296 3.17936 22.5365 3.29523 22.7227C3.41109 22.8841 3.59731 23 3.80421 23H6.16707C6.3988 23 6.63054 22.8593 6.72158 22.6524L7.8099 20.2647C8.64579 20.542 9.52307 20.6827 10.4293 20.6827C11.3563 20.6827 12.2128 20.5213 13.0487 20.2647L14.1371 22.6524C14.2281 22.8593 14.4598 23 14.6916 23H17.0627C17.2696 23 17.4558 22.909 17.5717 22.7227C17.6876 22.5614 17.7124 22.3296 17.6172 22.1434L16.0406 18.5267C17.7579 16.9956 18.871 14.7486 18.871 12.2451Z"
                          fill="var(--primary400Color)"
                        ></path>
                        <path
                          d="M11.7784 7.91253C11.3605 7.77184 10.9218 7.70563 10.4335 7.70563C7.92998 7.70563 5.88989 9.74571 5.88989 12.2493C5.88989 14.7528 7.92998 16.7929 10.4335 16.7929C12.9371 16.7929 14.9772 14.7528 14.9772 12.2493C14.9772 11.7858 14.9068 11.3472 14.7703 10.9292L11.9191 13.7804C11.526 14.1735 10.9922 14.4052 10.4128 14.4052C9.85833 14.4052 9.32452 14.1735 8.90657 13.7804C8.07067 12.9445 8.07067 11.6037 8.90657 10.7678L11.7784 7.91253Z"
                          fill="var(--primary400Color)"
                        ></path>
                        <path
                          opacity="0.4"
                          d="M21.6269 3.46404C21.5111 3.18679 21.2338 3.00058 20.9317 3.00058H19.682V1.75087C19.682 1.44879 19.4958 1.17154 19.2185 1.05567C18.9413 0.939801 18.6144 1.01015 18.3826 1.21705L16.5288 3.07092C16.3881 3.21162 16.297 3.3937 16.297 3.60474V5.08618L9.7878 11.6202C9.4402 11.9678 9.4402 12.5472 9.7878 12.9196C9.94919 13.081 10.1809 13.1969 10.4375 13.1969C10.6692 13.1969 10.901 13.1058 11.0872 12.9196L17.6419 6.36072H19.1234C19.3303 6.36072 19.5165 6.26968 19.6572 6.12898L21.5111 4.27511C21.6973 4.06821 21.7676 3.7413 21.6269 3.46404Z"
                          fill="var(--primary400Color)"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="purchase-personalized-list_itemTitle__5hjGo">
                        Goal
                      </h4>
                      <p class="purchase-personalized-list_itemText__SqDVY">
                        Get fit body
                      </p>
                    </div>
                  </li>
                  <li class="purchase-personalized-list_item__iOpXE purchase-personalized-list_animateItem1__SMDcT">
                    <div class="purchase-personalized-list_iconContainer__YTH5D">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.56 10.7898H1.44C1.19801 10.7898 1 10.9878 1 11.2298V11.309C1 15.8762 4.71801 19.5898 9.28079 19.5898H14.7192C19.2864 19.5898 23 15.8762 23 11.309V11.2298C23 10.9878 22.8064 10.7898 22.56 10.7898Z"
                          fill="var(--primary400Color)"
                        ></path>
                        <path
                          d="M12.1629 6.04706L10.5437 7.36706C11.0409 8.18545 11.3049 9.08307 11.4325 9.91027H17.4649L12.7217 6.04706C12.5589 5.91947 12.3257 5.91506 12.1629 6.04706Z"
                          fill="var(--primary400Color)"
                        ></path>
                        <path
                          opacity="0.4"
                          d="M6.23613 7.59998L8.01815 9.90998H10.5437C10.3853 9.01236 10.0509 8.03998 9.37774 7.23918C7.54735 5.05677 4.04493 5.06998 3.90413 5.06998C3.69294 5.07438 3.51252 5.22397 3.47294 5.43078C3.45094 5.54956 3.03294 7.87278 3.88213 9.90998H6.90494L5.53654 8.13677C5.39133 7.94757 5.42654 7.67037 5.61574 7.52078C5.80934 7.37117 6.08654 7.40638 6.23613 7.59998Z"
                          fill="var(--primary400Color)"
                        ></path>
                        <path
                          opacity="0.4"
                          d="M18.6308 9.72512L18.8552 9.90994H20.7912C21.1828 8.58994 21.1784 7.44154 21.1784 7.37994C21.174 7.16872 21.0244 6.98833 20.8176 6.94872C20.756 6.93994 20.14 6.82553 19.282 6.82553C18.3228 6.82553 17.0644 6.96633 15.9468 7.54273L17.9356 9.16193L18.0808 9.03434C18.2612 8.87154 18.5428 8.88913 18.7056 9.06952C18.8684 9.24994 18.8508 9.52714 18.6704 9.68994L18.6308 9.72512Z"
                          fill="var(--primary400Color)"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="purchase-personalized-list_itemTitle__5hjGo">
                        Dietary restrictions
                      </h4>
                      <p class="purchase-personalized-list_itemText__SqDVY">
                        Works with low-carb diet
                      </p>
                    </div>
                  </li>
                  <li class="purchase-personalized-list_item__iOpXE purchase-personalized-list_animateItem2__fbNq_">
                    <div class="purchase-personalized-list_iconContainer__YTH5D">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4805 9.6013L18.4585 9.56837C15.9309 6.50546 15.2914 2.79768 15.1294 1C9.31395 5.68214 8.49059 11.7395 8.49059 11.8022C8.46972 11.987 8.35696 12.1486 8.19079 12.2316C8.02442 12.3147 7.82762 12.308 7.66736 12.214C6.25392 11.4044 5.63635 9.69463 5.37557 8.5829C4.18076 9.82539 3.39146 11.4015 3.1123 13.1023C2.83318 14.8033 3.07727 16.5491 3.81221 18.1082C4.54715 19.6673 5.73834 20.9664 7.22814 21.8337C6.49971 20.7635 6.19742 19.46 6.38003 18.1787C6.56286 16.8972 7.2176 15.7301 8.21617 14.9063C8.37431 14.7786 8.59007 14.7487 8.7769 14.8287C8.96374 14.9086 9.09125 15.0853 9.10809 15.2878C9.1437 15.6523 9.23636 16.0088 9.38263 16.3446C10.0707 14.1891 11.4452 12.3183 13.2963 11.0172C13.464 10.8978 13.6845 10.8823 13.8676 10.9772C14.0504 11.0722 14.1647 11.2613 14.1635 11.4673C14.1635 11.492 14.1635 14.0143 15.7225 15.886C15.7391 15.9031 15.7531 15.9224 15.7636 15.9438C16.3998 16.7971 16.727 17.8412 16.6912 18.9051C16.6927 19.95 16.378 20.971 15.7883 21.8336C17.0773 21.0877 18.1469 20.0155 18.8893 18.7246C19.6319 17.4338 20.021 15.9701 20.0177 14.4808C20.0177 12.502 19.5427 10.9981 18.4806 9.6011L18.4805 9.6013Z"
                          fill="var(--primary400Color)"
                        ></path>
                        <path
                          opacity="0.4"
                          d="M14.8493 16.5504C13.9388 15.3889 13.3541 14.0057 13.1559 12.5432C11.65 13.8466 10.6201 15.6135 10.2274 17.5658C10.2054 17.7488 10.093 17.9086 9.92819 17.9911C9.76699 18.0771 9.57363 18.0771 9.41226 17.9911C8.8538 17.6345 8.44182 17.0891 8.25132 16.4543C7.48667 17.4664 7.23589 18.7763 7.57244 19.9994C7.909 21.2224 8.79464 22.2196 9.9695 22.698C10.1663 22.7782 10.3692 22.8433 10.576 22.8929C11.188 23.0357 11.8248 23.0357 12.4368 22.8929C12.6455 22.8439 12.8502 22.7788 13.0487 22.698C13.802 22.3938 14.447 21.871 14.9003 21.1969C15.3539 20.5228 15.5951 19.7285 15.593 18.916C15.6282 18.0763 15.3699 17.2507 14.863 16.5804C14.8549 16.5724 14.8501 16.5616 14.8492 16.5503L14.8493 16.5504Z"
                          fill="var(--primary400Color)"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="purchase-personalized-list_itemTitle__5hjGo">
                        Calories
                      </h4>
                      <p class="purchase-personalized-list_itemText__SqDVY">
                        1340 cal
                      </p>
                    </div>
                  </li>
                  <li class="purchase-personalized-list_item__iOpXE purchase-personalized-list_animateItem3__mi92M">
                    <div class="purchase-personalized-list_iconContainer__YTH5D">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8 3.59999V9.19997C10.8 9.62432 10.6314 10.0313 10.3313 10.3313C10.0313 10.6314 9.62432 10.8 9.19997 10.8H3.59999C3.17565 10.8 2.76868 10.6314 2.46863 10.3313C2.16857 10.0313 2 9.62432 2 9.19997V3.59999C2 3.17565 2.16857 2.76868 2.46863 2.46863C2.76868 2.16857 3.17565 2 3.59999 2H9.19997C9.62432 2 10.0313 2.16857 10.3313 2.46863C10.6314 2.76868 10.8 3.17565 10.8 3.59999ZM20.3999 2H14.8C14.3756 2 13.9686 2.16857 13.6686 2.46863C13.3685 2.76868 13.2 3.17565 13.2 3.59999V9.19997C13.2 9.62432 13.3685 10.0313 13.6686 10.3313C13.9686 10.6314 14.3756 10.8 14.8 10.8H20.3999C20.8243 10.8 21.2312 10.6314 21.5313 10.3313C21.8314 10.0313 21.9999 9.62432 21.9999 9.19997V3.59999C21.9999 3.17565 21.8314 2.76868 21.5313 2.46863C21.2312 2.16857 20.8243 2 20.3999 2ZM9.19997 13.2H3.59999C3.17565 13.2 2.76868 13.3685 2.46863 13.6686C2.16857 13.9686 2 14.3756 2 14.8V20.3999C2 20.8243 2.16857 21.2312 2.46863 21.5313C2.76868 21.8314 3.17565 21.9999 3.59999 21.9999H9.19997C9.62432 21.9999 10.0313 21.8314 10.3313 21.5313C10.6314 21.2312 10.8 20.8243 10.8 20.3999V14.8C10.8 14.3756 10.6314 13.9686 10.3313 13.6686C10.0313 13.3685 9.62432 13.2 9.19997 13.2Z"
                          fill="var(--primary400Color)"
                        ></path>
                        <path
                          opacity="0.4"
                          d="M15.1094 13.8955C15.833 13.412 16.6837 13.1539 17.5539 13.1539C18.7209 13.1539 19.84 13.6175 20.6652 14.4427C21.4903 15.2678 21.9539 16.387 21.9539 17.5539C21.9539 18.4241 21.6958 19.2748 21.2124 19.9984C20.7289 20.722 20.0417 21.2859 19.2377 21.619C18.4337 21.952 17.549 22.0391 16.6955 21.8694C15.842 21.6996 15.058 21.2805 14.4427 20.6652C13.8273 20.0498 13.4083 19.2658 13.2385 18.4123C13.0687 17.5588 13.1558 16.6741 13.4889 15.8701C13.8219 15.0661 14.3858 14.3789 15.1094 13.8955Z"
                          fill="var(--primary400Color)"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="purchase-personalized-list_itemTitle__5hjGo">
                        Other preferences
                      </h4>
                      <p class="purchase-personalized-list_itemText__SqDVY">
                        Fasting on weekends
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="purchase-personalized-highlights_animationArrowsContainer__lucTM">
                <div class="purchase-personalized-animation-arrows_container__7ZRWV purchase-personalized-animation-arrows_isShown__pXFPJ">
                  <svg
                    width="110"
                    height="398"
                    viewBox="0 0 110 398"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="purchase-personalized-animation-arrows_animationTriangle1__QxWj4"
                  >
                    <path
                      opacity="0.8"
                      d="M114.991 6.89818C116.728 3.81361 114.499 0 110.959 0C109.288 0 107.747 0.90063 106.927 2.35631L4.72836 183.793C-0.434799 192.959 -0.435593 204.157 4.72625 213.324L106.928 394.826C107.747 396.281 109.288 397.182 110.959 397.182C114.499 397.182 116.727 393.368 114.989 390.285L15.3112 213.407C10.1444 204.239 10.1432 193.037 15.3082 183.867L114.991 6.89818Z"
                      fill="var(--primary200Color)"
                    ></path>
                  </svg>
                  <svg
                    width="110"
                    height="398"
                    viewBox="0 0 110 398"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="purchase-personalized-animation-arrows_animationTriangle2__X6M_Y"
                  >
                    <path
                      opacity="0.8"
                      d="M114.991 6.89818C116.728 3.81361 114.499 0 110.959 0C109.288 0 107.747 0.90063 106.927 2.35631L4.72836 183.793C-0.434799 192.959 -0.435593 204.157 4.72625 213.324L106.928 394.826C107.747 396.281 109.288 397.182 110.959 397.182C114.499 397.182 116.727 393.368 114.989 390.285L15.3112 213.407C10.1444 204.239 10.1432 193.037 15.3082 183.867L114.991 6.89818Z"
                      fill="var(--primary200Color)"
                    ></path>
                  </svg>
                  <svg
                    width="110"
                    height="398"
                    viewBox="0 0 110 398"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="purchase-personalized-animation-arrows_animationTriangle3__O_sKr"
                  >
                    <path
                      opacity="0.8"
                      d="M114.991 6.89818C116.728 3.81361 114.499 0 110.959 0C109.288 0 107.747 0.90063 106.927 2.35631L4.72836 183.793C-0.434799 192.959 -0.435593 204.157 4.72625 213.324L106.928 394.826C107.747 396.281 109.288 397.182 110.959 397.182C114.499 397.182 116.727 393.368 114.989 390.285L15.3112 213.407C10.1444 204.239 10.1432 193.037 15.3082 183.867L114.991 6.89818Z"
                      fill="var(--primary200Color)"
                    ></path>
                  </svg>
                  <svg
                    width="110"
                    height="398"
                    viewBox="0 0 110 398"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="purchase-personalized-animation-arrows_animationTriangle4__ky8Ya"
                  >
                    <path
                      opacity="0.8"
                      d="M114.991 6.89818C116.728 3.81361 114.499 0 110.959 0C109.288 0 107.747 0.90063 106.927 2.35631L4.72836 183.793C-0.434799 192.959 -0.435593 204.157 4.72625 213.324L106.928 394.826C107.747 396.281 109.288 397.182 110.959 397.182C114.499 397.182 116.727 393.368 114.989 390.285L15.3112 213.407C10.1444 204.239 10.1432 193.037 15.3082 183.867L114.991 6.89818Z"
                      fill="var(--primary200Color)"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="purchase-personalized-highlights_noteContainer__SXU8z">
            <p class="purchase-personalized-highlights_noteText__YlX0y">
              Customized according to your <b>Body Type &amp; BMI</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default highlights;
