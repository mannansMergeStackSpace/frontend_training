import { applyMiddleware, createStore, Store } from "redux";
import { IApplicationState, rootReducer } from "./ducks";

export default function configureStore(
  initialState: IApplicationState
): Store<IApplicationState> {
  const middlewares = applyMiddleware();
  // Create Store
  const store = createStore(rootReducer, initialState, middlewares);
  return store;
}
