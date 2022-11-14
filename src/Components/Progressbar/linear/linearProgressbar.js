import * as React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const CustomizedLinearProgress = styled(Box)`
  color: #20b2aa;

  :hover {
    color: #2e8b57;
  }
`;

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CustomizedLinearProgress
        sx={{
          width: "100%",
          mr: 1,
          backgroundColor: props.color,
          borderRadius: 2,
          color: props.color,
        }}
      >
        <LinearProgress variant="determinate" {...props} />
      </CustomizedLinearProgress>
      <Box sx={{ minWidth: 35, mr: 2 }}>
        <Typography variant="body2">{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function LinearProgressbar(props) {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const time = parseInt(props.loadingtime, 10) * 10;

    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 1
      );
    }, time);
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
