import React from "react";
import "./App.css";
import configureStore from "./state";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import DashboardContainer from "./containers/dashboardContainer";

const initialState = (window as any).initialReduxState;
const store = configureStore(initialState);
const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <DashboardContainer />
        </Provider>
      </BrowserRouter>
    </div>
  );
};
export default App;
