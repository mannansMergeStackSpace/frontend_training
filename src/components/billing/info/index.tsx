import { Box } from "@mui/material";
import { FC, useMemo } from "react";
import { User } from "state/ducks/user/types";
import Info, { InfoProps } from "./info";
import InfoBarStyles from "./infobar.styles";

interface AllTypes {
  user: User | null;
}

const InforBar: FC<AllTypes> = ({ user }: AllTypes) => {
  const cStyles = InfoBarStyles();

  const userInfo = useMemo<InfoProps[]>(
    (): InfoProps[] => [
      {
        title: "Projects",
        count: user?.projects?.length || 0,
        icon: "/icons/Paper.svg",
        background: "#FFF2E9",
      },
      {
        title: "Requests",
        count: user?.requests?.length || 0,
        icon: "/icons/Swap.svg",
        background: "#EDE8FF",
      },
      {
        title: "Users",
        count: user?.contributors?.length || 0,
        icon: "/icons/Profile.svg",
        background: "#EAF9FF",
      },
    ],
    [user]
  );

  return (
    <Box
      boxShadow={"0px 18px 32px 0px info.dark"}
      className={cStyles.container}
    >
      {userInfo.map((info: InfoProps) => (
        <Info {...info} />
      ))}
    </Box>
  );
};
export default InforBar;
