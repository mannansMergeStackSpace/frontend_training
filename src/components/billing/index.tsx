import { Box } from "@mui/system";
import Plan from "components/common/plan";
import { FC } from "react";
import { IUserState } from "state/ducks/user/types";
import Activity from "./activity";
import BillingChart from "./chart";
import InforBar from "./infoBar";

const Billings: FC<IUserState> = ({ data, errors, loading }: IUserState) => {
  return (
    <Box display={"flex"} position={"relative"} top={70}>
      <Box position={"relative"}>
        <InforBar />
        <BillingChart />
        <Plan />
      </Box>
      <Activity />
    </Box>
  );
};

export default Billings;
