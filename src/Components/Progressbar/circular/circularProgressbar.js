import * as React from "react";
import { Navigate } from "react-router-dom";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import "./circularProgressbar.css";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        {...props}
        color={"error"}
        size="10rem"
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function CircularStatic() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const time = 100 + Math.random() * 30;
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 1
      );
    }, time);
    return () => {
      clearInterval(timer);
    };
  }, []);

  let redirect;
  if (progress === 100) {
    redirect = <Navigate to="/" />;
  }

  return (
    <div className="Container">
      <CircularProgressWithLabel value={progress} className="main" />
      <ul className="TextList">
        <li className="i1">Caption 1</li>
        <li className="i2">Caption 2</li>
        <li className="i3">Caption 3</li>
        <li className="i4">Caption 4</li>
        <li className="i5">Caption 5</li>
        <li className="i6">Caption 6</li>
      </ul>
      {redirect}
    </div>
  );
}
