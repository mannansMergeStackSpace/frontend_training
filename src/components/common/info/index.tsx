import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import InfoBarStyles from "./infobar.styles";

export interface InfoProps {
  title: string;
  count: number | string;
  icon: string;
  background?: string;
  textVariant: any;
  textColor: string;
  numberVariant: any;
  numberColor: string;
}

const CustomInfo: FC<InfoProps> = ({
  title,
  count,
  icon,
  background,
  textVariant,
  textColor,
  numberVariant,
  numberColor,
}: InfoProps) => {
  const styles = InfoBarStyles();

  return (
    <Box className={styles.containerItem}>
      <Box
        style={{
          background,
        }}
        className={styles.iconContainer}
      >
        <img className={styles.icon} src={icon} alt="" />
      </Box>
      <Box className={styles.typographyContainer}>
        <Typography variant={textVariant} color={textColor}>
          {title}
        </Typography>
        <Typography
          variant={numberVariant}
          color={numberColor}
          className={styles.numberTypography}
        >
          {count}
        </Typography>
      </Box>
    </Box>
  );
};
export default CustomInfo;
