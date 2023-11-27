import { Box } from "@mui/system";
import Plan from "components/common/plan";
import { FC } from "react";
import { IUserState } from "state/ducks/user/types";
import Activity from "./activity";
import BillingChart from "./chart";
import InforBar from "./infoBar";

const Billings: FC<IUserState> = ({
  data: { user },
  errors,
  loading,
}: IUserState) => {
  return (
    <Box display={"flex"} position={"relative"} top={70}>
      {user && ( // we can add some suspese or loader based on loading, forn now user check
        <Box>
          <InforBar user={user} />
          <BillingChart user={user} />
          <Plan user={user} />
        </Box>
      )}
      <Activity />
    </Box>
  );
};

export default Billings;
