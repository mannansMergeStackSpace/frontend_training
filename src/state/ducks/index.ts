import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import {
  Action,
  MetaAction,
  PayloadAction,
  TypeConstant,
} from "typesafe-actions";
import { userReducer } from "./user/reducer";
import userSaga from "./user/saga";
import { IUserState } from "./user/types";

export interface IApplicationState {
  user: IUserState;
}
export interface IMetaAction extends MetaAction<TypeConstant, IMeta> {}

export interface IReducerAction<TPayload>
  extends Action<TypeConstant>,
    PayloadAction<TypeConstant, TPayload> {}
export const rootReducer = combineReducers<IApplicationState>({
  user: userReducer,
});

export type requestMethod = "GET" | "POST" | "PATCH" | "UPDATE" | "PUT";

export function* rootSaga() {
  yield all([fork(userSaga)]);
}
interface IMeta {
  method: requestMethod;
  route: string;
}
