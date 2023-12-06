import { makeStyles } from "@mui/styles";

const ProgressStyles = makeStyles({
  progressBarCointainer: {
    borderRadius: "16px",
    marginBottom: "30px",
    marginTop: "30px",
  },
  progressBarTypographyContainer: {
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
