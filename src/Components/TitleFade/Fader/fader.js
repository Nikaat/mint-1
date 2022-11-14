// import React from "react";

// import classes from "./title.module.css";

// const title = (props) => {
//   console.log(props.delayTime);
//   console.log(props.text);
//   return (
//     <li
//       className={classes.Li}
//       key={props.text}
//       style={{ "--delay-time": props.delayTime }}
//     >
//       {props.text}
//     </li>
//   );
// };

// export default title;

import React, { useState, useEffect } from "react";
import "./fader.css";

const Fader = (props) => {
  const text = props.text;
  const [fadeProp, setFadeProp] = useState({
    fade: "fade-in",
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === "fade-in") {
        setFadeProp({
          fade: "fade-out",
        });
      } else {
        setFadeProp({
          fade: "fade-in",
        });
      }
    }, 4000);

    return () => clearInterval(timeout);
  }, [fadeProp]);

  return (
    <h1 data-testid="fader" className={fadeProp.fade}>
      {text}
    </h1>
  );
};

export default Fader;
