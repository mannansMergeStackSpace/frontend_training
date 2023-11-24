import { Divider, List, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const Activity = () => {
  const styles = activityStyles();
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

const activityStyles = makeStyles({
  activityContainer: {
    borderRadius: "20px",
    position: "relative",
    width: "507px",
    height: "812px",
    background: "#FFFFFF",
    top: "50px",
    left: "60px",
  },
  activityHeaderContainer: {
    position: "relative",
    display: "flex",
    top: "35px",
    left: "40px",
  },
  activityTypography: {
    width: "83px",
    height: "32px",

    position: "relative",
    letterSpacing: "-0.02em",
    textAlign: "left",
  },
  activityFilterIcon: {
    position: "absolute",
    width: "24px",
    height: "24px",
    right: 90,
    padding: "3px, 0px, 2px, 0px",
  },
  activityItemContainer: {
    position: "relative",
    height: "150px",
  },
  activityDivider: {
    width: "427px",
    border: "1px solid #ECECEE",
  },
});
