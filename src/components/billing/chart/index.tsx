import { Typography } from "@mui/material";

import { Box } from "@mui/system";
import { FC } from "react";
import { Request, User } from "state/ducks/user/types";
import LineChart from "./chart";
import ChartStyles from "./index.styles";

interface AllTypes {
  user: User | null;
}

const BillingChart: FC<AllTypes> = ({ user }: AllTypes) => {
  const cStyles = ChartStyles();
  return (
    <Box className={cStyles.chartContainer}>
      <Box className={cStyles.chartHeader}>
        <Typography variant="h5" className={cStyles.chartHeading}>
          API Calls in last 6 hours
        </Typography>
        <img
          className={cStyles.chartFilterIcon}
          src="/icons/Filter2.svg"
          alt=""
        />
      </Box>
      <Box
        maxHeight={"340px"}
        maxWidth={"759px"}
        top={60}
        left={50}
        position={"relative"}
      >
        <LineChart requests={user?.requests as Request[]} />
      </Box>
    </Box>
  );
};
export default BillingChart;
