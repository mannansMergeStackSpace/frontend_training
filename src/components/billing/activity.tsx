import { Divider, List, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const Activity = () => {
  const cStyles = activityStyles();
  return (
    <Box className={cStyles.activityContainer}>
      <Box display={"flex"}>
        <Typography className={cStyles.activityTypography}>Activity</Typography>
        <img
          className={cStyles.activityFilterIcon}
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
                <Box className={cStyles.activityItemContainer}></Box>
                <Box
                  display="flex"
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Divider className={cStyles.activityDivider} />
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
    top: "50px",
    left: "58px",
    background: "#FFFFFF",
  },
  activityTypography: {
    width: "83px",
    height: "32px",
    top: "35px",
    left: "40px",
    position: "relative",
    fontFamily: "Averta-Semibold",
    fontSize: "24px",
    lineHeight: "28px",
    letterSpacing: "-0.02em",
    textAlign: "left",
    color: "#15192C",
  },
  activityFilterIcon: {
    position: "relative",
    width: "24px",
    height: "24px",
    top: "35px",
    left: "280px",
    padding: "3px, 0px, 2px, 0px",
  },
  activityItemContainer: {
    position: "relative",
    height: "150px",
  },
  activityDivider: {
    width: "300px",
    border: "1px solid #ECECEE",
  },
});
