import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import ActivityStyles from "./activity.styles";

export interface ActivityProps {
  message: string;
}

const SingleActivity: FC<ActivityProps> = ({ message }: ActivityProps) => {
  const styles = ActivityStyles();

  return (
    <>
      <Box className={styles.activityItemContainer}>{message}</Box>
      <Box className={styles.dividerContainer}>
        <Divider className={styles.activityDivider} />
      </Box>
    </>
  );
};
export default SingleActivity;
