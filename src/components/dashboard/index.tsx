import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { FC, useEffect } from "react";
import { IDispatchToProps } from "state/ducks/user/types";
import Sidebar from "./sidebar";
import AppRoutes from "routes";
import TopBar from "./topbar";
import MainStyles from "./styles/main.styles";

const drawerWidth: number = 305;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.

const Dashboard: FC<IDispatchToProps> = ({ fetchUser }: IDispatchToProps) => {
  // kind of initialling app that's why fetching here!
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const styles = MainStyles();

  return (
    <Box className={styles.mainContainer}>
      <CssBaseline />
      <TopBar />
      <Drawer variant="permanent" open={true}>
        <Toolbar>
          <Box className={styles.appNameContainer}>
            <img className={styles.icon} src="/icons/logo.svg" alt="" />
            <Typography variant="h5" color={"primary.light"}>
              Nucleus
            </Typography>
          </Box>
        </Toolbar>

        <Box>
          <Sidebar />
        </Box>
      </Drawer>
      <Box component="main" className={styles.contentMainContainer}>
        <Container maxWidth="xl">
          <AppRoutes />
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
