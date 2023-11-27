import { makeStyles } from "@mui/styles";

const SidebarStyles = makeStyles({
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

export default SidebarStyles;
