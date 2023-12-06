import { Box } from "@mui/system";
import Plan from "components/common/plan";
import { FC } from "react";
import { IUserState } from "state/ducks/user/types";
import Activity from "./activity";
import BillingChart from "./chart";
import InforBar from "./info";
import InfoStyles from "./info/info.styles";

const Billings: FC<IUserState> = ({
  data: { user },
  errors,
  loading,
}: IUserState) => {
  const styles = InfoStyles();

  return (
    <Box className={styles.parentContainer}>
      <Box className={styles.container}>
        <InforBar user={user} />
        <BillingChart user={user} />
        <Plan user={user} />
      </Box>
      <Activity />
    </Box>
  );
};

export default Billings;
