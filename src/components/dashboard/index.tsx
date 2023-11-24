import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { FC, useEffect } from "react";
import { IDispatchToProps } from "state/ducks/user/types";
import { MainList } from "./sidebar";
import AppRoutes from "routes";
import TopBar from "./topbar";

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

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar />
      <Drawer variant="permanent" open={true}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: [1],
            position: "relative",
          }}
        >
          <Box
            top={"55px"}
            left={"81px"}
            position="absolute"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
          >
            <img
              height={"46.11px"}
              width={"46.11px"}
              src="/icons/logo.svg"
              alt=""
            />
            <Typography
              position={"relative"}
              fontWeight={"bold"}
              variant="h5"
              color={"primary.light"}
              left={"8px"}
            >
              Nucleus
            </Typography>
          </Box>
        </Toolbar>

        <Box position={"relative"} flexDirection="column" top={"65px"}>
          <MainList />
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: "#F8F9FC",
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4, ml: 4, mr: 4 }}>
          <AppRoutes />
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
