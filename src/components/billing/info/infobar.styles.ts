import { makeStyles } from "@mui/styles";

const InfoBarStyles = makeStyles({
  container: {
    position: "relative",
    display: "flex",
    width: "928px",
    height: "150px",
    top: "50px",
    borderRadius: "20px",
    background: "#FFFFFF",
  },
  containerItem: {
    position: "relative",
    dispay: "flex !important",
    width: "210px",
    height: "82px",
    top: "40px",
    left: "39px",
    borderRadius: "16px",
  },
  line: {
    position: "absolute",
    width: "82px",
    top: "34px",
    left: "125px",
    transform: "rotate(-90deg)",
    background: "#ECECEE",
    border: "1px solid #ECECEE",
  },
  iconContainer: {
    width: "63px",
    height: "63px",
    top: "211px",
    left: "50px",
    borderRadius: "16px",
    opacity: "0.65px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  icon: {
    position: "relative",
    width: "24px",
    height: "24px",
    top: "2px",
    left: "3.5px",
  },
  textTypography: {
    width: "61px",
    height: "20px",
    left: "6px",
    position: "relative",
    fontFamily: "AvertaStd-Bold",
    letterSpacing: "0em",
    textAlign: "left",
  },
  numberTypography: {
    position: "relative",
    width: "11px",
    height: "25px",
    top: "5px",
    left: "6px",

    fontFamily: "Averta-Regular",
    letterSpacing: "0em",
    textAlign: "left",
  },
});

export default InfoBarStyles;
