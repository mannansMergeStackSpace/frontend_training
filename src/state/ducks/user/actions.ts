import { action } from "typesafe-actions";
import { requestMethod } from "..";
import { IUserRaw, UserActionTypes } from "./types";
export const fetchUser = (id: string) =>
  action(UserActionTypes.FETCH_USER, [], {
    method: "GET" as requestMethod,
    route: `/users/${id}`,
  });
export const fetchUserSuccess = (data: IUserRaw) =>
  action(UserActionTypes.FETCH_USER_SUCCESS, data);
export const fetchUserError = (message: string) =>
  action(UserActionTypes.FETCH_USER_ERROR, message);
