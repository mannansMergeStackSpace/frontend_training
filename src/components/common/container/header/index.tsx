import { Box, Typography } from "@mui/material";
import { FC } from "react";
import HeaderStyles from "../styles/header.styles";

interface AllProps {
  message: string;
  icon: string;
}

const CustomHeader: FC<AllProps> = ({ message, icon }: AllProps) => {
  const styles = HeaderStyles();
  return (
    <Box className={styles.headerContainer}>
      <Typography className={styles.textContainer} variant="h5">
        {message}
      </Typography>
      <img className={styles.filterIcon} src={icon} alt="" />
    </Box>
  );
};
export default CustomHeader;
