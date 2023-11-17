import { applyMiddleware, createStore, Store } from "redux";
import { IApplicationState, rootReducer, rootSaga } from "./ducks";
import sagaMiddleware from "./middlewares/saga";

export default function configureStore(
  initialState: IApplicationState
): Store<IApplicationState> {
  const middlewares = applyMiddleware(sagaMiddleware);
  const store = createStore(rootReducer, initialState, middlewares);
  sagaMiddleware.run(rootSaga);
  return store;
}
