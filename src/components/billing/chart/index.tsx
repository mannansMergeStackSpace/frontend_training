import { Box } from "@mui/system";
import CustomContainer from "components/common/container";
import CustomHeader from "components/common/container/header";
import { FC } from "react";
import { Request, User } from "state/ducks/user/types";
import LineChart from "./chart";

interface AllTypes {
  user: User | null;
}

const BillingChart: FC<AllTypes> = ({ user }: AllTypes) => {
  return (
    <CustomContainer
      header={
        <CustomHeader
          message="API Calls in last 6 hours"
          icon="/icons/Filter2.svg"
        />
      }
    >
      <Box>
        <LineChart requests={user?.requests as Request[]} />
      </Box>
    </CustomContainer>
  );
};
export default BillingChart;
