import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { IMetaAction } from "..";
import apiCaller from "../../utils/apiCaller";
import { fetchUserError, fetchUserSuccess } from "./actions";
import { IUserRaw, UserActionTypes } from "./types";

/**
 * @desc Business logic of effect.
 */
function* handleFetch(action: IMetaAction): Generator {
  try {
    const res: IUserRaw | any = yield call(
      apiCaller,
      action.meta.method,
      action.meta.route
    );
    yield put(fetchUserSuccess(res));
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchUserError(err.stack!));
    } else {
      yield put(fetchUserError("An unknown error occured."));
    }
  }
}

/**
 * @desc Watches every specified action and runs effect method and passes action args to it
 */
function* watchFetchRequest(): Generator {
  yield takeEvery(UserActionTypes.FETCH_USER, handleFetch);
}

/**
 * @desc saga init, forks in effects, other sagas
 */
export default function* userSaga() {
  yield all([fork(watchFetchRequest)]);
}
