import React from "react";
import "./App.css";
import DashboardContainer from "./containers/dashboardContainer";
// import configureStore from "./state";
// import { Provider } from "react-redux";

const initialState = (window as any).initialReduxState;
console.log({ initialState });
// const store = configureStore(initialState);
const App: React.FC = () => {
  return (
    // <Provider store={store}>
    <div className="App">
      <DashboardContainer />
    </div>
    // </Provider>
  );
};
export default App;
