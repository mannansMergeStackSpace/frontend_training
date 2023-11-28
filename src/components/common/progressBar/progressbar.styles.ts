import { makeStyles } from "@mui/styles";

const ProgressStyles = makeStyles({
  progressBarCointainer: {
    position: "relative",
    width: "366px",
    height: "31px",
    top: "50px",
    borderRadius: "16px",
    marginBottom: "20px",
    marginTop: "20px",
  },
  progressBarTypographyContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "5px",
  },
  projectBarTypography: {
    letterSpacing: "-0.02em",
    textAlign: "left",
  },
  projectBarStyles: {
    height: "6px",
    borderRadius: "16px",
  },
});

export default ProgressStyles;
