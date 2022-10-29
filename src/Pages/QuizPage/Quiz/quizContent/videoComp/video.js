import React from "react";

const videoComp = (props) => {
  return (
    <div>
      <video width="100%" height="100%" controls autoPlay>
        <source src={props.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default videoComp;
