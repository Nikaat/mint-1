import React from "react";

import classes from "./HelpButton.module.css";

const helpButton = () => {
  return (
    <button
      style={{
        padding: "0",
        border: "0",
        margin: "0",
        verticalAlign: "baseline",
      }}
    >
      <div className={classes.Container}>
        <div className={classes.Button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 26 26"
            className={classes.ButtonIcon}
            aria-label="Help"
          >
            <g fill="#fff">
              <path d="M13 7c-2.3 0-4.2 1.8-4.2 4 0 .3.1.5.3.7.2.2.4.3.7.3.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7 0-1.2 1.2-2 2.2-2 1.1 0 2.2.8 2.2 2 0 .4-.1.6-.3.9-.2.2-.4.4-.8.7-.1 0-.1.1-.2.1h-.1l-.9.6c-.6.5-.9 1-.9 1.6 0 .3.1.5.3.7.2.2.4.3.7.3.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7l.1-.1c.2-.1.3-.2.5-.3.1-.1.3-.2.4-.3 1-.6 2.1-1.5 2.1-3.2.1-2.2-1.8-4-4.1-4zM13 16.5c-.3 0-.7.1-.9.4-.2.2-.4.6-.4.9 0 .3.1.7.4.9.2.2.6.4.9.4s.7-.1.9-.4c.2-.2.4-.6.4-.9 0-.3-.1-.7-.4-.9-.2-.3-.6-.4-.9-.4z"></path>
              <path d="M20.6 5.4c-2-2-4.7-3.1-7.6-3.1-2.9 0-5.5 1.1-7.6 3.1-2 2-3.1 4.7-3.1 7.6 0 2.8 1.1 5.6 3.1 7.6s4.7 3.1 7.6 3.1c2.9 0 5.5-1.1 7.6-3.1 2-2 3.1-4.7 3.1-7.6 0-2.9-1.1-5.5-3.1-7.6zM22 13c0 2.4-.9 4.7-2.6 6.3-1.7 1.7-4 2.7-6.4 2.7s-4.7-1-6.3-2.7C5 17.7 4 15.4 4 13s1-4.7 2.7-6.3C8.3 5 10.6 4 13 4s4.7.9 6.3 2.6C21 8.3 22 10.6 22 13z"></path>
            </g>
          </svg>
          <span className={classes.ButtonText}>Help</span>
        </div>
      </div>
    </button>
  );
};

export default helpButton;
