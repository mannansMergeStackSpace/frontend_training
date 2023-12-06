import { makeStyles } from "@mui/styles";

const SidebarStyles = makeStyles({
  optionContainer: {
    borderRadius: "100px",
    marginTop: "20px",
    left: "30px",
    padding: "25px",
    margin: "30px",
    textDecoration: "none",
    paddingLeft: "45px",
  },
  optionContentContainer: {
    display: "flex",
    alighItems: "center",
  },
  activeOptionContainer: {
    backgroundColor: "#F3F0FF",
  },
  activeOptionText: {
    color: "#551FFF",
  },
  optionText: {
    letterSpacing: "-0.02em",
    marginLeft: "20px !important",
  },
  listDividerContainer: {
    marginLeft: "45px",
    maxWidth: "198px",
    marginTop: "20px",
  },
  link: {
    textDecoration: "none",
  },
});

export default SidebarStyles;
