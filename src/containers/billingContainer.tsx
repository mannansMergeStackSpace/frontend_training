import { useSelector } from "react-redux";
import Billings from "../components/billing";
import { IApplicationState } from "../state/ducks";
import { IUserState } from "../state/ducks/user/types";

const BillingContainer = () => {
  const stateToProps: IUserState = useSelector(
    ({ user }: IApplicationState) => ({
      loading: user.loading,
      errors: user.errors,
      data: user.data,
    })
  );

  return <Billings {...stateToProps} />;
};

export default BillingContainer;
