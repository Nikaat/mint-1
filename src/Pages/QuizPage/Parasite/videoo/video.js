import React from "react";

import classes from "./video.module.css";

const video = (props) => {
  return (
    <div key="video" className={classes.Element}>
      <video
        src={props.inputs.link}
        controls
        autoPlay
        className={classes.Video}
        controlsList="nodownload"
      />
    </div>
  );
};

export default video;
