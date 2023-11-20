import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import SideBar from "./sidebar";
import { IDispatchToProps, IUserState } from "../../state/ducks/user/types";
import { useEffect } from "react";

type AllProps = IUserState & IDispatchToProps;
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Dashboard: React.FC<AllProps> = ({
  data,
  loading,
  errors,
  fetchUser,
}: AllProps) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <SideBar />
      </Box>
    </ThemeProvider>
  );
};
export default Dashboard;
