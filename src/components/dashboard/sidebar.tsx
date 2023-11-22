import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { AppRoutesEnum } from "constants/enums/routes.enum";

interface sidebarListItem {
  label: string;
  icon: string;
  to: string;
}

const primaryListItems: sidebarListItem[] = [
  {
    label: "Profile",
    icon: "/icons/Profile.svg",
    to: AppRoutesEnum.PROFILE,
  },
  {
    label: "Billings",
    icon: "/icons/Document.svg",
    to: AppRoutesEnum.BILLINGS,
  },
  {
    label: "Invoices",
    icon: "/icons/Wallet.svg",
    to: AppRoutesEnum.INVOICES,
  },
];

const secondaryListItems: sidebarListItem[] = [
  {
    label: "Settings",
    icon: "/icons/Setting.svg",
    to: AppRoutesEnum.SETTINGS,
  },
  {
    label: "Help",
    icon: "/icons/Calling.svg",
    to: AppRoutesEnum.HELP,
  },
  {
    label: "Logout",
    icon: "/icons/Logout.svg",
    to: AppRoutesEnum.LOGOUT,
  },
];

export const MainList = () => {
  const cStyles = listStyles();

  return (
    <React.Fragment>
      {primaryListItems.map((item: sidebarListItem) => (
        <Link style={{ textDecoration: "none" }} to={item.to}>
          <ListItemButton className={cStyles.optionContainer}>
            <Box className={cStyles.optionContentContainer}>
              <ListItemIcon>
                <img src={item.icon} alt="" />
              </ListItemIcon>
              <Typography
                variant="largeRegular"
                color={"info.dark"}
                className={cStyles.optionText}
              >
                {item.label}
              </Typography>
            </Box>
          </ListItemButton>
        </Link>
      ))}
    </React.Fragment>
  );
};

export const SecondaryList = () => {
  const cStyles = listStyles();

  return (
    <React.Fragment>
      {secondaryListItems.map((item: sidebarListItem) => (
        <Link style={{ textDecoration: "none" }} to={item.to}>
          <ListItemButton
            className={`${cStyles.optionContainer} ${
              true && cStyles.activeOptionContainer // active link logic boolean variable
            }`}
          >
            <Box className={cStyles.optionContentContainer}>
              <ListItemIcon>
                <img src={item.icon} alt="" />
              </ListItemIcon>
              <Typography
                variant="largeRegular"
                color={"info.dark"}
                className={cStyles.optionText}
              >
                {item.label}
              </Typography>
            </Box>
          </ListItemButton>
        </Link>
      ))}
    </React.Fragment>
  );
};

const listStyles = makeStyles({
  optionContainer: {
    width: "225px",
    height: "74px",
    borderRadius: "100px !important",
    margin: "5px",
  },
  optionContentContainer: {
    width: "101px",
    height: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  activeOptionContainer: {
    background: "#F3F0FF",
  },
  activeOptionText: {
    color: "#551FFF",
  },
  optionText: {
    width: "57px",
    height: "25px",
    letterSpacing: "-0.02em",
    textAlign: "left",
  },
});
