import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import AppRoutes from "../../routes";
import { List } from "@mui/material";
import { MainList, SecondaryList } from "./sidebar";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { FC, useEffect } from "react";
import { IDispatchToProps } from "../../state/ducks/user/types";

const drawerWidth: number = 305;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

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
const defaultTheme = createTheme();

const Dashboard: FC<IDispatchToProps> = ({ fetchUser }: IDispatchToProps) => {
  // kind of initialling app that's why fetching here!
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={true}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <Box display={"flex"} flexDirection={"column"}>
              <Typography
                component="h1"
                variant="h6"
                sx={{
                  width: "202px",
                  height: "53px",

                  fontFamily: "Averta-Semibold",
                  fontSize: "40px",
                  lineHeight: "47px",
                  letterSpacing: "-0.02em",
                  textAlign: "left",
                  color: "#15192C",
                }}
              >
                Dashboard
              </Typography>
              <Typography
                component="h1"
                variant="h6"
                sx={{
                  width: "399px",
                  height: "22px",
                  fontFamily: "Averta-Regular",
                  fontSize: "18px",
                  lineHeight: "21px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#92959E",
                }}
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
                right: 0,
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
                sx={{
                  width: "208px",
                  height: "24px",
                  fontFamily: "Averta-Semibold",
                  fontSize: "18px",
                  lineHeight: "21px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  right: 0,
                  color: "#15192C",
                  marginLeft: "10px",
                }}
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
        <Drawer variant="permanent" open={true}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: [1],
            }}
          >
            <Box
              top={"55px"}
              position="relative"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
            >
              <img src="/icons/logo.svg" alt="" />
              <Typography color={"#551FFF"}>Nucleus</Typography>
            </Box>
          </Toolbar>
          <List component="nav" sx={{ top: "67px" }}>
            <Box
              display={"flex"}
              flexDirection="column"
              justifyContent="center"
              alignItems={"center"}
            >
              <MainList />
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box
              display={"flex"}
              flexDirection="column"
              justifyContent="center"
              alignItems={"center"}
            >
              <SecondaryList />
            </Box>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: "#EAEAEA",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <AppRoutes />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
