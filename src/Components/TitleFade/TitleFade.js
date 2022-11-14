import React from "react";

import classes from "./TitleFade.module.css";
import Fader from "./Fader/fader";

const titleFade = (props) => {
  const texts = props.texts;

  // useEffect(() => {
  //   }, 4000);
  //   return () => clearInterval(timeout);
  // }, []);

  return (
    <ul className={classes.TitleFadeList}>
      {texts.map((text, index) => (
        <Fader key={text} text={text} time={index} />
      ))}
    </ul>
  );
};

export default titleFade;
