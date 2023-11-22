import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import ProgressBar from "../progressBar";

const Plan = () => {
  const cStyles = planStyles();
  return (
    <Box className={cStyles.planContainer}>
      <Box className={cStyles.chartHeadline}>
        <Typography
          variant="h5"
          color={"info.main"}
          className={cStyles.planInfoHeading}
        >
          Current Plan
        </Typography>
        <Typography
          variant={"smallRegular"}
          color={"info.light"}
          className={cStyles.planInfoSubHeading}
        >
          Information and usages of your current plan
        </Typography>
        <Box className={cStyles.planInfoContainer}>
          <Box className={cStyles.planIconContainer}>
            <img className={cStyles.planIcon} src="/icons/2User.svg" alt="" />
          </Box>
          <Box className={cStyles.planNamePriceContainer}>
            <Typography
              variant={"smallRegular"}
              color={"info.main"}
              className={cStyles.planName}
            >
              Teams Plan
            </Typography>
            <Typography
              variant={"mediumBold"}
              color={"info.main"}
              className={cStyles.planPrice}
            >
              $99/mo
            </Typography>
          </Box>
          <Box className={cStyles.planArrowIconContainer}>
            <img
              className={cStyles.planArrowIcon}
              src="/icons/chevron-down2.svg"
              alt=""
            />
          </Box>
        </Box>
        <Box className={cStyles.progressBarCointainer}>
          <Box className={cStyles.progressBarTypographyContainer}>
            <Typography
              color={"info.main"}
              className={cStyles.projectBarTypography}
              variant="smallRegular"
            >
              Projects
            </Typography>
            <Typography
              variant="smallRegular"
              color={"info.main"}
              className={cStyles.projectBarTypography}
            >
              1/3
            </Typography>
          </Box>
          <ProgressBar
            sx={{ ...commonProgressBarStyles }}
            value={20}
            variant="determinate"
          />
        </Box>

        <Box className={cStyles.progressBarCointainer}>
          <Box className={cStyles.progressBarTypographyContainer}>
            <Typography
              color={"info.main"}
              className={cStyles.projectBarTypography}
              variant="smallRegular"
            >
              Users
            </Typography>
            <Typography
              color={"info.main"}
              className={cStyles.projectBarTypography}
              variant="smallRegular"
            >
              1/3
            </Typography>
          </Box>
          <ProgressBar
            sx={{ ...commonProgressBarStyles }}
            value={20}
            variant="determinate"
          />
        </Box>

        <Box className={cStyles.progressBarCointainer}>
          <Box className={cStyles.progressBarTypographyContainer}>
            <Typography
              color={"info.main"}
              className={cStyles.projectBarTypography}
              variant="smallRegular"
            >
              Requests
            </Typography>
            <Typography
              color={"info.main"}
              className={cStyles.projectBarTypography}
              variant="smallRegular"
            >
              1/3
            </Typography>
          </Box>
          <Box>
            <ProgressBar
              sx={{ ...commonProgressBarStyles }}
              value={20}
              variant="determinate"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Plan;

const commonProgressBarStyles = {
  height: "6px",
  borderRadius: "16px",
};

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
