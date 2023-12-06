import { makeStyles } from "@mui/styles";

const HeaderStyles = makeStyles({
  headerContainer: {
    margin: "10px",
    display: "flex",
    width: "100%",
  },
  textContainer: {
    width: "95%",
    paddingLeft: "0px",
    display: "flex",
    alignItems: "start",
  },
  filterIcon: {
    width: "24px",
    height: "24px",
  },
});

export default HeaderStyles;
