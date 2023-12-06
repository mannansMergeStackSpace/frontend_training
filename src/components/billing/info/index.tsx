import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CustomContainer from "components/common/container";
import CustomInfo, { InfoProps } from "components/common/info";
import { FC, useMemo } from "react";
import { User } from "state/ducks/user/types";

interface AllTypes {
  user: User | null;
}

const InforBar: FC<AllTypes> = ({ user }: AllTypes) => {
  const styles = Styles();

  const userInfo = useMemo<InfoProps[]>(
    (): InfoProps[] => [
      {
        title: "Projects",
        count: user?.projects?.length || 0,
        icon: "/icons/Paper.svg",
        background: "#FFF2E9",
        textVariant: "normalBold",
        textColor: "info.light",
        numberVariant: "mediumRegular",
        numberColor: "info.main",
      },
      {
        title: "Requests",
        count: user?.requests?.length || 0,
        icon: "/icons/Swap.svg",
        background: "#EDE8FF",
        textVariant: "normalBold",
        textColor: "info.light",
        numberVariant: "mediumRegular",
        numberColor: "info.main",
      },
      {
        title: "Users",
        count: user?.contributors?.length || 0,
        icon: "/icons/Profile.svg",
        background: "#EAF9FF",
        textVariant: "normalBold",
        textColor: "info.light",
        numberVariant: "mediumRegular",
        numberColor: "info.main",
      },
    ],
    [user]
  );

  return (
    <CustomContainer>
      <Box className={styles.container}>
        {userInfo.map((info: InfoProps) => (
          <>
            {" "}
            <CustomInfo {...info} />
            <Box className={styles.line} />
          </>
        ))}
      </Box>
    </CustomContainer>
  );
};
export default InforBar;

const Styles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
  },
  line: {
    width: "82px",
    height: "0.5px",
    transform: "rotate(-90deg)",
    background: "#ECECEE",
    border: "1px solid #ECECEE",
  },
});
