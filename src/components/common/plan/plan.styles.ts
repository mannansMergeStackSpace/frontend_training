import { makeStyles } from "@mui/styles";

const PlanStyles = makeStyles({
  planContainer: {
    position: "relative",
    top: "110px",
    width: "446px",
    height: "404px",
    borderRadius: "24px",
    background: "#FFFFFF",
  },
  chartHeadline: {
    width: "285px",
    height: "54px",
    top: "35px",
    left: "40px",
    position: "relative",
    textAlign: "left",
  },
  planInfoHeading: {
    position: "relative",
    width: "300px",
    height: "32px",
    letterSpacing: "-0.02em",
  },
  planInfoSubHeading: {
    letterSpacing: "0em !important",
  },
  planInfoContainer: {
    position: "relative",
    width: "371px",
    height: "63px",
    top: "35px",
    borderRadius: "16px",
    display: "flex",
  },
  planIconContainer: {
    width: "63px",
    height: "63px",
    top: "119px",
    left: "40px",
    borderRadius: "16px",
    background: "#F1FBFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  planIcon: {
    width: "24px",
    height: "24px",
  },

  planNamePriceContainer: {
    position: "relative",
    left: "14px",
    paddingTop: "10px",
    display: "flex",
    flexDirection: "column",
  },

  planName: {
    width: "90px",
    height: "17px",
    letterSpacing: "-0.02em",
    textAlign: "left",
  },
  planPrice: {
    width: "63px",
    height: "24px",
    letterSpacing: "-0.02em",
    textAlign: "left",
  },
  planArrowIconContainer: {
    position: "absolute",
    height: "50px",
    width: "50px",
    right: "0px",
    display: "flex",
    alignItems: "center",
  },
  planArrowIcon: {
    position: "relative",
    width: "24px",
    height: "24px",
    padding: "0px, 6.96px, 0px, 7px",
    angle: "90 deg",
  },
});

export default PlanStyles;
