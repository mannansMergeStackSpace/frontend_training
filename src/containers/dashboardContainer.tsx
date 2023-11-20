import Dashboard from "../components/dashboard";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IApplicationState } from "../state/ducks/index";
import { fetchUser } from "../state/ducks/user/actions";
import { IUserState } from "../state/ducks/user/types";

const DashboardContainer = () => {
  const dispatch = useDispatch();

  const stateToProps: IUserState = useSelector(
    ({ user }: IApplicationState) => ({
      loading: user.loading,
      errors: user.errors,
      data: user.data,
    })
  );

  const dispatchToProps = {
    fetchUser: useCallback(
      () => dispatch(fetchUser("6554b01209ab40124b64148d")),
      [dispatch]
    ),
  };

  return <Dashboard {...stateToProps} {...dispatchToProps} />;
};

export default DashboardContainer;
