import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const InforBar = () => {
  const cStyles = infoBarStyles();

  return (
    <Box className={cStyles.container}>
      <Box className={cStyles.containerItem}>
        <Box className={cStyles.line}></Box>
        <Box display={"flex"}>
          <Box
            sx={{
              background: "#FFF2E9",
            }}
            className={cStyles.iconContainer}
          >
            <img className={cStyles.icon} src="/icons/Paper.svg" alt="" />
          </Box>
          <Box>
            <Typography className={cStyles.textTypography}>Projects</Typography>
            <Typography className={cStyles.numberTypography}>3</Typography>
          </Box>
        </Box>
      </Box>
      <Box className={cStyles.containerItem}>
        <Box className={cStyles.line}></Box>
        <Box display={"flex"}>
          <Box sx={{ background: "#EDE8FF" }} className={cStyles.iconContainer}>
            <img src="/icons/Swap.svg" alt="" />
          </Box>
          <Box>
            <Typography className={cStyles.textTypography}>Requests</Typography>
            <Typography className={cStyles.numberTypography}>3</Typography>
          </Box>
        </Box>
      </Box>
      <Box className={cStyles.containerItem}>
        <Box className={cStyles.line}></Box>
        <Box display={"flex"}>
          <Box
            sx={{
              background: "#EAF9FF",
            }}
            className={cStyles.iconContainer}
          >
            <img src="/icons/Document.svg" alt="" />
          </Box>
          <Box>
            <Typography className={cStyles.textTypography}>Users</Typography>
            <Typography className={cStyles.numberTypography}>3</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default InforBar;

const infoBarStyles = makeStyles({
  container: {
    position: "relative",
    display: "flex",
    width: "750px",
    height: "150px",
    top: "50px",
    // left: "30px",
    borderRadius: "20px",
    background: "#FFFFFF",
    boxShadow: "0px 18px 32px 0px #D0D2DA26",
  },
  containerItem: {
    position: "relative",
    dispay: "flex !important",
    width: "186px",
    height: "82px",
    top: "34px",
    left: "39px",
    borderRadius: "16px",
  },
  line: {
    position: "relative",
    width: "82px",
    top: "34px",
    left: "125px",
    transform: "rotate(-90deg)",
    background: "#ECECEE",
    border: "1px solid #ECECEE",
  },
  iconContainer: {
    width: "63px",
    height: "63px",
    top: "211px",
    left: "39px",
    borderRadius: "16px",
    opacity: "0.65px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  icon: {
    position: "relative",
    width: "24px",
    height: "24px",
    top: "2px",
    left: "3.5px",
  },
  textTypography: {
    width: "61px",
    height: "20px",
    left: "6px",
    position: "relative",
    fontFamily: "AvertaStd-Bold",
    fontSize: "16px",
    lineHeight: "19px",
    letterSpacing: "0em",
    textAlign: "left",
  },
  numberTypography: {
    position: "relative",
    width: "11px",
    height: "25px",
    top: "5px",
    left: "6px",

    fontFamily: "Averta-Regular",
    fontSize: "20px",
    lineHeight: "23px",
    letterSpacing: "0em",
    textAlign: "left",
  },
});
