import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const Plan = () => {
  const cStyles = planStyles();
  return (
    <Box className={cStyles.planContainer}>
      <Box className={cStyles.chartHeadline}>
        <Typography className={cStyles.planInfoHeading}>
          Current Plan
        </Typography>
        <Typography className={cStyles.planInfoSubHeading}>
          Information and usages of your current plan
        </Typography>
        <Box className={cStyles.planInfoContainer}>
          <Box className={cStyles.planIconContainer}>
            <img className={cStyles.planIcon} src="/icons/2User.svg" alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Plan;

const planStyles = makeStyles({
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
    fontFamily: "Averta-Semibold",
    textAlign: "left",
  },
  planInfoHeading: {
    width: "138px",
    height: "32px",
    fontSize: "24px",
    lineHeight: "28px",
    letterSpacing: "-0.02em",
  },
  planInfoSubHeading: {
    fontSize: "14px !important",
    lineHeight: "16px !important",
    letterSpacing: "0em !important",
    color: "#92959E",
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
});
