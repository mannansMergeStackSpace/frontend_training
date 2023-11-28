import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useMemo } from "react";
import { User } from "state/ducks/user/types";
import ProgressBar, { ProgressBarProps } from "../progressBar";
import PlanStyles from "./plan.styles";

interface AllTypes {
  user: User;
}

const Plan: FC<AllTypes> = ({ user }: AllTypes) => {
  const cStyles = PlanStyles();

  const planDetails = useMemo<ProgressBarProps[]>((): ProgressBarProps[] => {
    const { plan, requests, contributors, projects } = user;
    const commonProgressBarStyles = {
      height: "6px",
      borderRadius: "16px",
    };
    return [
      {
        title: "Projects",
        progress: `${projects?.length || 0} / ${plan?.maximumProjects || 0}`,
        value: ((projects?.length || 0) / (plan?.maximumProjects || 0)) * 100,
        variant: "determinate",
        sx: { ...commonProgressBarStyles, color: "primary.main" },
      },
      {
        title: "Users",
        progress: `${contributors?.length || 0} / ${plan?.maximumUsers || 0}`,
        value: ((contributors?.length || 0) / (plan?.maximumUsers || 0)) * 100, // percentage,
        variant: "determinate",
        sx: { ...commonProgressBarStyles, color: "primary.light" },
      },
      {
        title: "Requests",
        value: ((requests?.length || 0) / (plan?.requestsPerMonth || 0)) * 100, // percentage
        progress: `${requests?.length || 0} / ${plan?.requestsPerMonth || 0}`,
        variant: "determinate",
        sx: { ...commonProgressBarStyles, color: "primary.contrastText" },
      },
    ];
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
              ${user?.plan?.price || 0}/mo
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

        {planDetails?.map((detail) => (
          <ProgressBar {...detail} />
        ))}
      </Box>
    </Box>
  );
};
export default Plan;
