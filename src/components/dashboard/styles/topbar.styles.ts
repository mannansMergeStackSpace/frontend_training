import { makeStyles } from "@mui/styles";

const TopbarStyles = makeStyles({
  toolbar: {
    marginTop: "35px",
    marginLeft: "35px",
    width: "100%",
  },
  headingContainer: {
    display: "flex",
    flexDirection: "column",
    width: "72%",
    alignItems: "start",
  },
  heading: {
    letterSpacing: "-0.02em",
    textAlign: "left",
  },
  dateContainer: {
    padding: "15px",
    display: "flex",
    backgroundColor: "#F4F5F7",
    borderRadius: "12px",
  },
  icon: {
    width: "24px",
    height: "24px",
  },
  date: {
    marginLeft: "20px !important",
    marginRight: "20px !important",
  },
});

export default TopbarStyles;
