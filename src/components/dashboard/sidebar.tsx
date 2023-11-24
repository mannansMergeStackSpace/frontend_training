import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Divider, Typography } from "@mui/material";
import { AppRoutesEnum } from "constants/enums/routes.enum";
import { useMemo } from "react";

interface sidebarListItem {
  label: string;
  icon: string;
  to: string;
  isActiveRoute?: boolean;
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

const halfItemsCount = primaryListItems.length / 2;

export const MainList = () => {
  const styles = listStyles();
  const location = useLocation();

  const listItems: sidebarListItem[] = useMemo(() => {
    return primaryListItems.map((item: sidebarListItem) => {
      return {
        ...item,
        isActiveRoute: location.pathname === item.to,
      };
    });
  }, [location.pathname]);

  return (
    <React.Fragment>
      {listItems?.map((item: sidebarListItem, index: number) => {
        return (
          <>
            {index === halfItemsCount && (
              <Box className={styles.listDividerContainer}>
                <Divider />
              </Box>
            )}
            <Link to={item.to}>
              <ListItemButton
                className={`${styles.optionContainer} ${
                  item.isActiveRoute && styles.activeOptionContainer
                }`}
              >
                <Box className={styles.optionContentContainer}>
                  <img src={item.icon} alt="" />
                  <Typography
                    variant="largeRegular"
                    color={item.isActiveRoute ? "primary.light" : "info.dark"}
                    className={styles.optionText}
                  >
                    {item.label}
                  </Typography>
                </Box>
              </ListItemButton>
            </Link>
          </>
        );
      })}
    </React.Fragment>
  );
};

const listStyles = makeStyles({
  optionContainer: {
    position: "relative",
    width: "225px",
    height: "74px",
    borderRadius: "100px !important",
    marginTop: "20px !important",
    left: "30px",
  },
  optionContentContainer: {
    position: "absolute",
    width: "101px",
    height: "25px",
    display: "flex",
    top: "25px",
    left: "35px",
    justifyContent: "center",
    alighItems: "center",
  },
  activeOptionContainer: {
    backgroundColor: "#F3F0FF !important",
  },
  activeOptionText: {
    color: "#551FFF",
  },
  optionText: {
    position: "relative",
    width: "57px",
    height: "25px",
    letterSpacing: "-0.02em",
    left: "20px",
  },
  listDividerContainer: {
    position: "relative",
    left: "45px",
    width: "198px",
    marginTop: "20px",
  },
});
