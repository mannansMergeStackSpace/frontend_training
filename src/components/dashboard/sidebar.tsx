import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AppRoutesEnum } from "../../constants/enums/routes.enum";
import { Link } from "react-router-dom";

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
  return (
    <React.Fragment>
      {primaryListItems.map((item: sidebarListItem) => (
        <ListItemButton>
          <ListItemIcon>
            <img src={item.icon} alt="" />
          </ListItemIcon>
          <Link style={{ textDecoration: "none" }} to={item.to}>
            <ListItemText primary={item.label} />
          </Link>
        </ListItemButton>
      ))}
    </React.Fragment>
  );
};

export const SecondaryList = () => {
  return (
    <React.Fragment>
      {secondaryListItems.map((item: sidebarListItem) => (
        <ListItemButton>
          <ListItemIcon>
            <img src={item.icon} alt="" />
          </ListItemIcon>
          <Link style={{ textDecoration: "none" }} to={item.to}>
            <ListItemText primary={item.label} />
          </Link>
        </ListItemButton>
      ))}
    </React.Fragment>
  );
};
