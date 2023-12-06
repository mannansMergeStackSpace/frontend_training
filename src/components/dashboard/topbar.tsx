import { Box, Typography } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { useEffect, useState } from "react";
import formatDate from "utils/formatDate";
import TopbarStyles from "./styles/topbar.styles";

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
  const [date, setDate] = useState<string>("");
  const styles = TopbarStyles();
  // logic for date/ date-update on date change!
  useEffect(() => {
    const interval = setInterval(() => {
      const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      const currentDate = formatDate(dateOptions, new Date());
      setDate(currentDate);
    }, 1 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AppBar open={true}>
      <Toolbar className={styles.toolbar}>
        <Box className={styles.headingContainer}>
          <Typography variant="h3" color="info.main" className={styles.heading}>
            Dashboard
          </Typography>
          <Typography variant="mediumRegular" color="info.light">
            Information about your current plan and usages
          </Typography>
        </Box>
        <Box className={styles.dateContainer}>
          <img className={styles.icon} src="/icons/Calendar.svg" alt="" />
          <Typography
            className={styles.date}
            variant="mediumBold"
            color={"info.main"}
          >
            {date}
          </Typography>
          <img className={styles.icon} src="/icons/chevron-down1.png" alt="" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default TopBar;
