import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
import ContainerMainStyles from "./styles/main.styles";

interface AllProps {
  children: ReactNode;
  header?: ReactNode;
  subHeader?: ReactNode;
}

const CustomContainer: FC<AllProps> = ({
  children,
  header,
  subHeader,
}: AllProps) => {
  const styles = ContainerMainStyles();
  return (
    <Box className={styles.container}>
      {header && <Box className={styles.headerContainer}>{header}</Box>}
      {subHeader && <Box className={styles.headerContainer}>{subHeader}</Box>}
      {children && <Box>{children}</Box>}
    </Box>
  );
};

export default CustomContainer;
