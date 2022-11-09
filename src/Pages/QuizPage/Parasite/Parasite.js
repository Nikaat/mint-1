import React from "react";

import classes from "./Parasite.module.css";

const parasite = (props) => {
  let elements = props.result.parasite.elements;

  let el = [null, null, null, null, null];
  let elementsLength = Object.keys(elements).length;

  for (var i = 0; i < elementsLength; i++) {
    if (elements[i].id === "title") {
      el[i] = (
        <div key="title" className={classes.Element}>
          <h3>{elements[i].inputs.text}</h3>
        </div>
      );
    }

    if (elements[i].id === "description") {
      el[i] = (
        <div key="description" className={classes.Element}>
          <p className={classes.Description}>{elements[i].inputs.text}</p>
        </div>
      );
    }

    // if (elements[i].id === "titleFade") {
    //   el[i] = (
    //     <div key="titleFade">
    //       <ul className={classes.TitleFadeList}>
    //         <li className={classes.Li1}>{elements[i].inputs.texts[0]}</li>
    //         <li className={classes.Li2}>{elements[i].inputs.texts[1]}</li>
    //         <li className={classes.Li3}>{elements[i].inputs.texts[2]}</li>
    //         <li className={classes.Li4}>{elements[i].inputs.texts[3]}</li>
    //         <li className={classes.Li5}>{elements[i].inputs.texts[4]}</li>
    //       </ul>
    //     </div>
    //   );
    // }

    if (elements[i].id === "button") {
      el[i] = (
        <div key="button" className={classes.Element}>
          <button
            className={classes.ParasiteButton}
            style={{
              backgroundColor: elements[i].inputs.bgColor,
              color: elements[i].inputs.textColor,
            }}
          >
            {elements[i].inputs.text}
          </button>
        </div>
      );
    }

    // if (elements[i].id === "diagram") {
    //   el[i] = (

    //   );
    // }
  }

  return <div className={classes.ParasiteContainer}>{el}</div>;
};

export default parasite;
