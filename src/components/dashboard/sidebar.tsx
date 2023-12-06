import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import { Divider, Typography } from "@mui/material";
import { AppRoutesEnum } from "constants/enums/routes.enum";
import { useMemo } from "react";
import SidebarStyles from "./styles/sidebar.styles";

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

const Sidebar = () => {
  const styles = SidebarStyles();
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
            <Link className={styles.link} to={item.to}>
              <Box
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
              </Box>
            </Link>
          </>
        );
      })}
    </React.Fragment>
  );
};

export default Sidebar;
