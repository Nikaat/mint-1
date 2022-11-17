import * as React from "react";
// import { Navigate } from "react-router-dom";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import classes from "./circularProgressbar.module.css";
import { connect } from "react-redux";
import { goNext } from "../../../redux/actions";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        {...props}
        size="12rem"
        sx={{ color: "var(--primary500Color)" }}
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
        <Typography
          sx={{ fontSize: "34px", fontWeight: "900" }}
          variant="caption"
          component="div"
          color="text.secondary"
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

function CircularStatic(props) {
  const [progress, setProgress] = React.useState(0);
  const time = parseInt(props.loadingtime, 10) * 10;
  const maxValue = parseInt(props.maxValue, 10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= maxValue ? maxValue : prevProgress + 1
      );
    }, time);
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line
  }, []);

  let redirect;
  if (progress === maxValue) {
    if (props.nextByButton !== "true") {
      props.goNext(props.aid, props.code);
    }
  }

  let texts = props.texts;

  return (
    <div className={classes.Container}>
      <CircularProgressWithLabel value={progress} className={classes.main} />

      <ul
        className={classes.TextList}
        style={{ display: props.texts === "" ? "none" : "block" }}
      >
        <li className={classes.i1}>{texts[0]}</li>
        <li className={classes.i2}>{texts[1]}</li>
        <li className={classes.i3}>{texts[2]}</li>
        <li className={classes.i4}>{texts[3]}</li>
        <li className={classes.i5}>{texts[4]}</li>
        <li className={classes.i6}>{texts[5]}</li>
      </ul>

      {redirect}
    </div>
  );
}

const mapStateToprops = (state) => ({
  code: state.quiz.code,
});

const mapDispatchToprops = (dispatch) => ({
  goNext: (aid, code) => dispatch(goNext(aid, code)),
});

export default connect(mapStateToprops, mapDispatchToprops)(CircularStatic);
