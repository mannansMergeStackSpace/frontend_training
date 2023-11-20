import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { Box, List, ListItem, Typography } from "@mui/material";
import { AppRoutesEnum } from "../../constants/enums/routes.enum";
import { Link } from "react-router-dom";

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
  },
}));

interface sidebarListItem {
  label: string;
  icon: string;
  to: string;
}

const listItems: sidebarListItem[] = [
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

const SideBar = () => {
  return (
    <Drawer variant="permanent">
      <Box
        position={"relative"}
        top={"55px"}
        left={"81px"}
        display={"flex"}
        alignItems={"center"}
        width={"141.11px"}
        height={"100%"}
      >
        <img
          src="/icons/logo.svg"
          alt=""
          height={"46.11px"}
          width={"46.11px"}
        />
        <Typography>Nucleus</Typography>
      </Box>

      <List>
        {listItems.map((item: sidebarListItem) => (
          <ListItem
            style={{
              height: "74px",
              width: "255px",
              top: "167px",
              left: "40px",
              borderRadius: "100px",
              color: "#D0D2DA",
            }}
          >
            <img src={item.icon} alt="" />
            <Link to={item.to}>{item.label}</Link>
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
    </Drawer>
  );
};
export default SideBar;
