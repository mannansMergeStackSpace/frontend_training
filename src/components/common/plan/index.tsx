import { Box } from "@mui/system";
import { FC, useMemo } from "react";
import { User } from "state/ducks/user/types";
import CustomContainer from "../container";
import CustomHeader from "../container/header";
import CustomSubHeader from "../container/subHeader";
import CustomInfo from "../info";
import ProgressBar, { ProgressBarProps } from "../progressBar";
import PlanStyles from "./plan.styles";

interface AllTypes {
  user: User | null;
}

const Plan: FC<AllTypes> = ({ user }: AllTypes) => {
  const styles = PlanStyles();

  const planDetails = useMemo<ProgressBarProps[]>((): ProgressBarProps[] => {
    const { plan, requests, contributors, projects } = user || {};
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
    <Box className={styles.container}>
      <CustomContainer
        header={
          <CustomHeader message="Current Plan" icon="/icons/Filter2.svg" />
        }
        subHeader={
          <CustomSubHeader message="Information and usages of your current plan" />
        }
      >
        <Box className={styles.infoContainer}>
          <Box>
            <CustomInfo
              title={"Teams Plan"}
              count={`$${user?.plan?.price || 0}/mo`}
              icon={"/icons/2User.svg"}
              background={"#F1FBFF"}
              textVariant="smallRegular"
              textColor="info.main"
              numberVariant="mediumBold"
              numberColor="info.main"
            />
          </Box>
          <Box>
            <img
              className={styles.planArrowIcon}
              src="/icons/chevron-down2.svg"
              alt=""
            />
          </Box>
        </Box>
        {planDetails?.map((detail) => (
          <ProgressBar {...detail} />
        ))}
      </CustomContainer>
    </Box>
  );
};
export default Plan;
