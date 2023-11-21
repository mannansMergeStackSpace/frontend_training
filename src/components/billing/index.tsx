import { Box } from "@mui/system";
import { FC } from "react";
import { IUserState } from "../../state/ducks/user/types";
import Plan from "../common/plan";
import Activity from "./activity";
import BillingChart from "./chart";
import InforBar from "./infoBar";

const Billings: FC<IUserState> = ({ data, errors, loading }: IUserState) => {
  return (
    <Box display={"flex"}>
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
