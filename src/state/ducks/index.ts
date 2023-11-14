import { combineReducers } from "redux";
import {
  Action,
  MetaAction,
  PayloadAction,
  TypeConstant,
} from "typesafe-actions";

export interface IApplicationState {}
export interface IMetaAction extends MetaAction<TypeConstant, IMeta> {}

export interface IReducerAction<TPayload>
  extends Action<TypeConstant>,
    PayloadAction<TypeConstant, TPayload> {}
export const rootReducer = combineReducers<IApplicationState>({});

interface IMeta {
  method: string;
  route: string;
}
