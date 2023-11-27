import { makeStyles } from "@mui/styles";
const ChartStyles = makeStyles({
  chartContainer: {
    position: "relative",
    maxWidth: "928px",
    height: "450px",
    top: "80px",
    borderRadius: "20px",
    background: "#FFFFFF",
    boxShadow: "0px 18px 32px 0px #D0D2DA26",
    gap: "10px",
  },
  chartHeader: {
    position: "relative",
    display: "flex",
    top: "35px",
    width: "100%",
    height: "35px",
  },
  chartHeading: {
    position: "absolute",
    width: "300px",
    height: "32px",
    left: "30px",
  },
  chartFilterIcon: {
    position: "absolute",
    width: "24px",
    height: "24px",
    right: "30px",
  },
});

export default ChartStyles;
