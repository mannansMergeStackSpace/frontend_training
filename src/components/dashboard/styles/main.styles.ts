import { makeStyles } from "@mui/styles";

const MainStyles = makeStyles({
  mainContainer: {
    display: "flex",
  },
  appNameContainer: {
    margin: "auto",
    marginTop: "55px",
    marginBottom: "55px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: "46.11px",
    width: "46.11px",
  },
  contentMainContainer: {
    backgroundColor: "#F8F9FC",
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
});

export default MainStyles;
