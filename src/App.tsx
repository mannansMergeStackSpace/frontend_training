import React from "react";
import "./App.css";
import DashboardContainer from "./containers/dashboardContainer";
import configureStore from "./state";
import { Provider } from "react-redux";
import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
const initialState = (window as any).initialReduxState;
const store = configureStore(initialState);
const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <DashboardContainer />
          <AppRoutes />
        </Provider>
      </BrowserRouter>
    </div>
  );
};
export default App;
