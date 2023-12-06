import React, { useState } from "react";
import "./App.css";
import configureStore from "./state";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import CustomThemeProvider from "themes";
import DashboardContainer from "containers/dashboardContainer";

const initialState = (window as any).initialReduxState;
const store = configureStore(initialState);
const App: React.FC = () => {
  // for now just as a state, will use handler latter
  const [currentMode] = useState<"light" | "dark">("light");
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <CustomThemeProvider mode={currentMode}>
            <DashboardContainer />
          </CustomThemeProvider>
        </Provider>
      </BrowserRouter>
    </div>
  );
};
export default App;
