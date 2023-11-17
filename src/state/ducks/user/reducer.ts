import { Action, PayloadAction, TypeConstant } from "typesafe-actions";
import { IUserRaw, IUserState, UserActionTypes } from "./types";
export const initialState: IUserState = {
  data: {
    user: null,
  },
  errors: [],
  loading: false,
};
export const userReducer = (
  state: IUserState = initialState,
  action: Action<TypeConstant> & PayloadAction<TypeConstant, IUserRaw>
): IUserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER: {
      return { ...state, loading: true };
    }
    case UserActionTypes.FETCH_USER_SUCCESS: {
      return { ...initialState, data: action.payload };
    }
    case UserActionTypes.FETCH_USER_ERROR: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
