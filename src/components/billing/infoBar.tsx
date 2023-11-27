import { Box, Typography } from "@mui/material";
import { FC, useMemo } from "react";
import { User } from "state/ducks/user/types";
import InfoBarStyles from "./styles/infobar.styles";

interface AllTypes {
  user: User;
}

const InforBar: FC<AllTypes> = ({ user }: AllTypes) => {
  const cStyles = InfoBarStyles();

  const { totalProjects, totalRequests, totalUsers } = useMemo(
    () => ({
      totalRequests: user?.requests?.length || 0,
      totalUsers: user?.contributors?.length || 0,
      totalProjects: user?.projects?.length || 0,
    }),
    [user]
  );

  return (
    <Box
      boxShadow={"0px 18px 32px 0px info.dark"}
      className={cStyles.container}
    >
      <Box className={cStyles.containerItem}>
        <Box className={cStyles.line}></Box>
        <Box display={"flex"}>
          <Box
            style={{
              background: "#FFF2E9",
            }}
            className={cStyles.iconContainer}
          >
            <img className={cStyles.icon} src="/icons/Paper.svg" alt="" />
          </Box>
          <Box display={"flex"} flexDirection="column">
            <Typography
              variant="normalRegular"
              color={"info.light"}
              className={cStyles.textTypography}
            >
              Projects
            </Typography>
            <Typography
              variant="mediumRegular"
              color={"info.main"}
              className={cStyles.numberTypography}
            >
              {totalProjects}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={cStyles.containerItem}>
        <Box className={cStyles.line}></Box>
        <Box display={"flex"}>
          <Box
            style={{ background: "#EDE8FF" }}
            className={cStyles.iconContainer}
          >
            <img src="/icons/Swap.svg" alt="" />
          </Box>
          <Box display={"flex"} flexDirection="column">
            <Typography
              variant="normalRegular"
              color={"info.light"}
              className={cStyles.textTypography}
            >
              Requests
            </Typography>
            <Typography
              color={"info.main"}
              className={cStyles.numberTypography}
              variant={"mediumRegular"}
            >
              {totalRequests}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={cStyles.containerItem}>
        <Box className={cStyles.line}></Box>
        <Box display={"flex"}>
          <Box
            style={{
              background: "#EAF9FF",
            }}
            className={cStyles.iconContainer}
          >
            <img src="/icons/Document.svg" alt="" />
          </Box>
          <Box display={"flex"} flexDirection="column">
            <Typography
              variant="normalRegular"
              color={"info.light"}
              className={cStyles.textTypography}
            >
              Users
            </Typography>
            <Typography
              variant="mediumRegular"
              color={"info.main"}
              className={cStyles.numberTypography}
            >
              {totalUsers}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default InforBar;
