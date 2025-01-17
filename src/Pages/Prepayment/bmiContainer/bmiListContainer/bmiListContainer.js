import React from "react";

import classes from "./bmiListContainer.module.css";
import Item from "./listItem/listItem";
import AnimationArrows from "./animationArrows/animationArrows";

const bmiListContainer = (props) => {
  return (
    <div className={classes.ListContainer}>
      <div className={`${classes.Container} ${classes.IsShown}`}>
        <ul className={classes.List}>
          <Item
            title="Body type"
            text="Mesomorph"
            svg={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M11.9976 13C14.7543 13 17 10.754 17 7.99761C17.0002 5.24096 14.7543 3 11.9976 3C9.24096 3 7 5.24101 7 7.99761C7.00021 10.754 9.24117 13 11.9976 13Z"
                  fill="var(--primary400Color)"
                ></path>
                <path
                  d="M16.4296 13C15.2085 13.9192 13.6744 14.4674 12.0078 14.4674C10.3473 14.4674 8.8135 13.9194 7.59214 13C3.8687 14.0696 2.62446 17.7049 2.20867 20.015C2.01301 21.1021 2.89345 22 3.99802 22C6.09346 22 9.43345 22 12.0078 22C14.5867 22 17.9131 22 20.0019 22C21.1065 22 21.9871 21.1021 21.7921 20.0149C21.3779 17.7048 20.1385 14.0696 16.4296 13Z"
                  fill="var(--primary400Color)"
                ></path>
              </svg>
            }
          />
          <Item
            title="Lifestyle"
            text="Active"
            svg={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_16114_22946)">
                  <path
                    opacity="0.6"
                    d="M6.05762 8.11991C7.80618 9.40929 9.84521 10.9358 11.109 11.857C11.8972 12.444 12.7793 13.1245 13.7049 13.8686C15.8474 15.5614 18.28 17.4527 20.415 18.5841C21.611 19.2098 22.347 19.4791 22.7762 19.566C23.1799 18.2469 22.1509 17.3365 20.3633 15.8049C19.5067 15.0488 18.8325 14.2996 18.3045 13.554C17.2904 13.7666 16.7752 13.9278 16.5148 13.9926C16.3951 14.0297 16.2423 13.9884 16.2016 13.8662L16.0151 13.5203C15.9338 13.3695 15.9942 13.1972 16.1516 13.1536C16.4911 13.0231 17.0248 12.875 17.7811 12.7236C17.5659 12.3245 17.3728 11.9409 17.1992 11.5766C16.2322 11.8554 15.7261 12.0505 15.4686 12.1504C15.3334 12.2096 15.2146 12.1592 15.127 12.0645L14.9119 11.7592C14.8151 11.6305 14.8571 11.4453 15.0042 11.3614C15.3878 11.1683 16.0032 10.9509 16.87 10.7284C16.721 10.2822 16.632 9.88368 16.5706 9.53212C15.3772 9.8666 14.7865 10.0959 14.5005 10.2364C14.3653 10.2956 14.2336 10.2636 14.1588 10.1505L13.9438 9.84513C13.847 9.71649 13.889 9.53125 14.0361 9.44735C14.5042 9.22007 15.2863 8.93799 16.442 8.61009C16.4334 8.44986 16.4056 8.30915 16.374 8.22087C16.362 8.15181 16.3655 8.06063 16.3313 7.97603C16.2642 7.55433 16.2006 6.98644 15.6936 6.65769C15.184 6.33262 14.3426 6.38571 13.1337 6.74231C10.4957 7.5101 9.07145 4.31718 8.867 3.68332C8.64958 3.06789 8.49635 2.28277 7.85045 2.01062C7.50587 1.88963 7.09453 1.94204 6.61343 2.18775C6.15554 2.45529 5.63896 2.92391 5.14101 3.49926C5.79766 4.14798 7.02396 5.78083 6.05762 8.11991Z"
                    fill="var(--primary400Color)"
                  ></path>
                  <path
                    opacity="0.3"
                    d="M4.55206 4.16477C4.06068 4.77779 3.57478 5.42219 3.18355 5.9789C3.62149 6.31971 4.39383 6.89001 5.30737 7.56504C5.91009 5.82961 5.05835 4.67478 4.55206 4.16477Z"
                    fill="var(--primary400Color)"
                  ></path>
                  <path
                    d="M19.9791 19.3846C19.0246 18.9011 18.0449 18.2732 17.0531 17.5763C15.7111 16.6332 14.3855 15.5804 13.1281 14.6032C12.187 13.8812 11.3204 13.1786 10.5572 12.6422C8.41781 11.0782 4.02637 7.80489 2.65018 6.77719L2.43254 7.08689C2.09831 7.56249 1.97095 7.96317 2.04179 8.38747C2.20179 9.30402 3.31522 10.0865 5.35774 11.5219C5.97713 11.9571 6.67763 12.4494 7.46951 13.0389C8.69274 13.9316 10.1722 15.0319 11.6073 16.101C13.3559 17.3904 15.0041 18.6423 15.9738 19.3237C16.5121 19.702 19.3212 21.5825 21.1921 21.2009C21.6818 21.1155 22.0559 20.8496 22.315 20.4809C21.7923 20.2293 21.0158 19.9314 19.9791 19.3846Z"
                    fill="var(--primary400Color)"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_16114_22946">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            }
          />
          <Item
            title="Fitness level"
            text="Intermediate"
            svg={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.3"
                  x="17.25"
                  y="2.25"
                  width="4.5"
                  height="19.5"
                  rx="2.25"
                  fill="var(--primary400Color)"
                ></rect>
                <rect
                  x="9.75"
                  y="7.5"
                  width="4.5"
                  height="14.25"
                  rx="2.25"
                  fill="var(--primary400Color)"
                ></rect>
                <rect
                  x="2.25"
                  y="14.25"
                  width="4.5"
                  height="7.5"
                  rx="2.25"
                  fill="var(--primary400Color)"
                ></rect>
              </svg>
            }
          />
          <Item
            title="Metabolism"
            text="Moderate, challenging to stay trim"
            svg={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_17397_6744)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 5.9H4C2.56406 5.9 1.4 7.06406 1.4 8.5V15.5C1.4 16.9359 2.56406 18.1 4 18.1H18C19.4359 18.1 20.6 16.9359 20.6 15.5V8.5C20.6 7.06406 19.4359 5.9 18 5.9ZM4 4.5C1.79086 4.5 0 6.29086 0 8.5V15.5C0 17.7091 1.79086 19.5 4 19.5H18C20.2091 19.5 22 17.7091 22 15.5V8.5C22 6.29086 20.2091 4.5 18 4.5H4Z"
                    fill="var(--primary400Color)"
                  ></path>
                  <path
                    d="M2.5 9C2.5 7.89543 3.39543 7 4.5 7H7.3754V17H4.5C3.39543 17 2.5 16.1046 2.5 15V9Z"
                    fill="var(--primary400Color)"
                  ></path>
                  <path
                    d="M8.57544 7H13.4508V17H8.57544V7Z"
                    fill="var(--primary400Color)"
                  ></path>
                  <path
                    opacity="0.3"
                    d="M14.6509 7H17.5263C18.6308 7 19.5263 7.89543 19.5263 9V15C19.5263 16.1046 18.6308 17 17.5263 17H14.6509V7Z"
                    fill="var(--primary400Color)"
                  ></path>
                  <path
                    opacity="0.6"
                    d="M22.3999 9H22.9999C23.5522 9 23.9999 9.44772 23.9999 10V14C23.9999 14.5523 23.5522 15 22.9999 15H22.3999V9Z"
                    fill="var(--primary400Color)"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_17397_6744">
                    <rect width="32" height="32" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            }
          />
        </ul>
      </div>
      <AnimationArrows />
    </div>
  );
};

export default bmiListContainer;
