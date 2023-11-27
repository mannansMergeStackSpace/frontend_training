import LinearProgress from "@mui/material/LinearProgress";
import { CSSProperties, FC } from "react";

interface ProgressBarProps {
  value: number;
  variant?: "determinate" | "buffer";
  sx?: CSSProperties;
}

const ProgressBar: FC<ProgressBarProps> = (props) => {
  return <LinearProgress {...props} color={"inherit"} />;
};
export default ProgressBar;
