import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import InfoBarStyles from "./infobar.styles";

export interface InfoProps {
  title: string;
  count: number;
  icon: string;
  background?: string;
}

const Info: FC<InfoProps> = ({ title, count, icon, background }: InfoProps) => {
  const styles = InfoBarStyles();

  return (
    <Box className={styles.containerItem}>
      <Box className={styles.line}></Box>
      <Box display={"flex"}>
        <Box
          style={{
            background,
          }}
          className={styles.iconContainer}
        >
          <img className={styles.icon} src={icon} alt="" />
        </Box>
        <Box display={"flex"} flexDirection="column">
          <Typography
            variant="normalRegular"
            color={"info.light"}
            className={styles.textTypography}
          >
            {title}
          </Typography>
          <Typography
            variant="mediumRegular"
            color={"info.main"}
            className={styles.numberTypography}
          >
            {count}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Info;
