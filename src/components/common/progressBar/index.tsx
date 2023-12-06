import { Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/system";
import { CSSProperties, FC } from "react";
import ProgressStyles from "./progressbar.styles";

export interface ProgressBarProps {
  value: number;
  variant?: "determinate" | "buffer";
  sx?: CSSProperties;
  title: string;
  progress: string;
}

const ProgressBar: FC<ProgressBarProps> = (props) => {
  const styles = ProgressStyles();

  return (
    <Box className={styles.progressBarCointainer}>
      <Box className={styles.progressBarTypographyContainer}>
        <Typography
          color={"info.main"}
          className={styles.projectBarTypography}
          variant="smallRegular"
        >
          {props.title}
        </Typography>
        <Typography
          color={"info.main"}
          className={styles.projectBarTypography}
          variant="smallRegular"
        >
          {props.progress}
        </Typography>
      </Box>
      <Box>
        <LinearProgress
          variant={props.variant}
          sx={props.sx}
          color={"inherit"}
          value={props.value}
        />
      </Box>
    </Box>
  );
};
export default ProgressBar;
