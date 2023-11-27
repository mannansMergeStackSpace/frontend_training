import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useMemo } from "react";
import { User } from "state/ducks/user/types";
import ProgressBar from "../progressBar";
import PlanStyles from "./plan.styles";

interface AllTypes {
  user: User;
}

const Plan: FC<AllTypes> = ({ user }: AllTypes) => {
  const cStyles = PlanStyles();

  const { projects, planPrice, contributors, requests } = useMemo(() => {
    const { plan, requests, contributors, projects } = user;
    return {
      projects: {
        totalProjects: plan?.maximumProjects || 0,
        currentProjects: projects?.length || 0,
        progress:
          ((projects?.length || 0) / (plan?.maximumProjects || 0)) * 100, // percentage
      },
      contributors: {
        totalContributors: plan?.maximumUsers || 0,
        currentContributors: contributors?.length,
        progress:
          ((contributors?.length || 0) / (plan?.maximumUsers || 0)) * 100, // percentage
      },
      requests: {
        totalRequests: plan?.requestsPerMonth || 0,
        currentRequests: requests?.length || 0,
        progress:
          ((requests?.length || 0) / (plan?.requestsPerMonth || 0)) * 100, // percentage
      },
      planPrice: plan?.price || 0,
    };
  }, [user]);

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
              ${planPrice}/mo
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
              {`${projects.currentProjects}/${projects.totalProjects}`}
            </Typography>
          </Box>
          <ProgressBar
            sx={{ ...commonProgressBarStyles, color: "primary.main" }}
            value={projects.progress}
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
              {`${contributors.currentContributors}/${contributors.totalContributors}`}
            </Typography>
          </Box>
          <ProgressBar
            sx={{ ...commonProgressBarStyles, color: "primary.light" }}
            value={contributors.progress}
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
              {`${requests.currentRequests}/${requests.totalRequests}`}
            </Typography>
          </Box>
          <Box>
            <ProgressBar
              sx={{
                ...commonProgressBarStyles,
                color: "primary.contrastText",
              }}
              value={requests.progress}
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
