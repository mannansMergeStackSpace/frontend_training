import { Box, Typography } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth: number = 305;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "unset",
  boxShadow: "unset",
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const TopBar = () => {
  return (
    <AppBar open={true}>
      <Toolbar
        sx={{
          margin: "35px",
          // pr: "60px", // keep right padding when drawer closed
        }}
      >
        <Box display={"flex"} flexDirection={"column"}>
          <Typography
            variant="h3"
            sx={{
              width: "202px",
              height: "53px",
              letterSpacing: "-0.02em",
              textAlign: "left",
            }}
            color="info.main"
          >
            Dashboard
          </Typography>
          <Typography
            variant="mediumRegular"
            sx={{
              width: "450px",
              height: "22px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
            color="info.light"
          >
            Information about your current plan and usages
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            float: "right",
            width: "399px",
            height: "77px",
            top: "40px",
            display: "flex",
            right: 60,
            backgrounColor: "#F4F5F7",
          }}
        >
          <img
            style={{
              width: "24px",
              height: "24px",
            }}
            src="/icons/Calendar.svg"
            alt=""
          />
          <Typography
            variant="mediumRegular"
            sx={{
              width: "280px",
              height: "24px",
              letterSpacing: "0em",
              textAlign: "left",
              right: 0,
              marginLeft: "10px",
            }}
            color={"info.main"}
          >
            Wednesday, 17 May 2021
          </Typography>
          <img
            style={{
              width: "24px",
              height: "24px",
            }}
            src="/icons/chevron-down1.png"
            alt=""
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default TopBar;
