import { makeStyles } from "@mui/styles";

const InfoBarStyles = makeStyles({
  containerItem: {
    display: "flex",
    borderRadius: "16px",
    alignItems: "center",
  },
  line: {
    width: "82px",
    height: "0.5px",
    transform: "rotate(-90deg)",
    background: "#ECECEE",
    border: "1px solid #ECECEE",
  },
  iconContainer: {
    width: "63px",
    height: "63px",
    borderRadius: "16px",
    opacity: "0.65px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  icon: {
    width: "24px",
    height: "24px",
  },

  typographyContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    marginLeft: "10px",
  },
  numberTypography: {
    display: "flex",
    justifyContent: "left",
  },
});

export default InfoBarStyles;
