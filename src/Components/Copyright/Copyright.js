import React from "react";

import classes from "./Copyright.module.css";

const copyright = () => (
  <div className={classes.Copyright}>
    <div className={classes.copyright}>
      <span className={classes.copyrightRow}>
        2022 © All Rights Reserved. By continuing you agree to our
      </span>
      <span className={classes.copyrightRow}>
        <span>
          <a href="./">Terms of Service</a>
        </span>{" "}
        |{" "}
        <span>
          <a href="./">Privacy Policy</a>
        </span>{" "}
        |{" "}
        <span>
          <a href="./">Subscription Policy</a>
        </span>
      </span>
    </div>
  </div>
);

export default copyright;
