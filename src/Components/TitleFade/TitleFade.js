import React from "react";

import classes from "./TitleFade.module.css";
import Title from "./title/title";

const titleFade = (props) => {
  const texts = props.texts;
  console.log(texts.length);

  return (
    <ul className={classes.TitleFadeList}>
      {texts.map((text, index) => (
        <Title key={text} text={text} delayTime={index * 5} />
      ))}
    </ul>
  );
};

export default titleFade;
