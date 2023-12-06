import { Typography } from "@mui/material";
import { FC } from "react";
import SubHeadingStyles from "../styles/subHeading.styles";

interface AllProps {
  message: string;
}

const CustomSubHeader: FC<AllProps> = ({ message }: AllProps) => {
  const styles = SubHeadingStyles();

  return (
    <Typography
      variant={"smallRegular"}
      color={"info.light"}
      className={styles.subHeading}
    >
      {message}
    </Typography>
  );
};

export default CustomSubHeader;
