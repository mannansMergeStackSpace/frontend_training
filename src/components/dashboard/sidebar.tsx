import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { Box, List, ListItem, Typography } from "@mui/material";

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

const listItems = [
  {
    label: "Profile",
    icon: "/icons/Profile.svg",
  },
  {
    label: "Billings",
    icon: "/icons/Document.svg",
  },
  {
    label: "Invoices",
    icon: "/icons/Wallet.svg",
  },
  {
    label: "Settings",
    icon: "/icons/Setting.svg",
  },
  {
    label: "Help",
    icon: "/icons/Calling.svg",
  },
  {
    label: "Logout",
    icon: "/icons/Logout.svg",
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
        height={"46.11px"}
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
        {listItems.map((item) => (
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
            <Typography>{item.label}</Typography>
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
    </Drawer>
  );
};
export default SideBar;
