import { Box } from "@mui/system";
import Plan from "../common/plan";
import Activity from "./activity";
import BillingChart from "./chart";
import InforBar from "./infoBar";

const Billings = () => {
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
