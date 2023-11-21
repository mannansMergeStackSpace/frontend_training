import LinearProgress from "@mui/material/LinearProgress";
import { CSSProperties, FC } from "react";

interface ProgressBarProps {
  value: number;
  variant?: "determinate" | "buffer";
  sx?: CSSProperties;
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "inherit"
    | undefined;
}

const ProgressBar: FC<ProgressBarProps> = (props) => {
  return <LinearProgress {...props} />;
};
export default ProgressBar;
