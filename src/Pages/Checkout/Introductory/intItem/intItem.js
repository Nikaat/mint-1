import React from "react";

import classes from "./intItem.module.css";

const intItem = (props) => {
  return (
    <li className={classes.PicsListItem}>
      <img
        className={classes.PicsListItemImage}
        src={props.icon}
        alt="Weight loss plan"
      />
      <div>
        <p className={classes.PicsListItemTitle}>{props.title}</p>
        <p className={classes.PicsListItemSubtitle}>{props.description}</p>
      </div>
    </li>
  );
};

export default intItem;
