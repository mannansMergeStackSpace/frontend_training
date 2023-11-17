import { IMetaAction, requestMethod } from "..";

export interface IUserState {
  readonly data: IUserRaw;
  readonly loading: boolean;
  readonly errors: [];
}
export type ApiResponse = Record<string, any>;
export interface IUserRaw extends ApiResponse {
  user: User | null;
}
export const UserActionTypes = {
  FETCH_USER: "@@user/FETCH_USER",
  FETCH_USER_SUCCESS: "@@user/FETCH_USER_SUCCESS",
  FETCH_USER_ERROR: "@@user/FETCH_USER_ERROR",
};

export interface User {
  _id: string;
  name: string;
  email: string;
  currentPlan: string;
  createdAt: string;

  plan?: Plan;
  projects?: Project[];
  requests?: Request[];
}

export interface Plan {
  _id: string;
  name: string;
  maximumProjects: number;
  maximumUsers: number;
  requestsPerMonth: number;
  createdAt: string;
}

export interface Project {
  _id: string;
  name: string;
  type: string;
  domain: string;
  userId: string;
  createdAt: string;
}

export interface Request {
  _id: string;
  projectId: string;
  method: requestMethod;
  url: string;
  createdAt: string;
}

export interface IDispatchToProps {
  fetchUser: () => IMetaAction;
}
