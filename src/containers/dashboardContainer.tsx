import Dashboard from "components/dashboard";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "state/ducks/user/actions";

const DashboardContainer = () => {
  const dispatch = useDispatch();
  const userId = "6554b01209ab40124b64148d";

  const dispatchToProps = {
    fetchUser: useCallback(() => dispatch(fetchUser(userId)), [dispatch]),
  };
  // will configure later
  return <Dashboard {...dispatchToProps} />;
};

export default DashboardContainer;
