import { Divider, List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ActivityStyles from "./styles/activity.styles";

const Activity = () => {
  const styles = ActivityStyles();
  return (
    <Box className={styles.activityContainer}>
      <Box className={styles.activityHeaderContainer}>
        <Typography
          variant="h5"
          color={"info.main"}
          className={styles.activityTypography}
        >
          Activity
        </Typography>
        <img
          className={styles.activityFilterIcon}
          src="/icons/Filter.svg"
          alt=""
        />
      </Box>
      <List>
        {Array(4)
          .fill(0)
          .map(() => {
            return (
              <>
                <Box className={styles.activityItemContainer}></Box>
                <Box
                  display="flex"
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Divider className={styles.activityDivider} />
                </Box>
              </>
            );
          })}
      </List>
    </Box>
  );
};
export default Activity;
