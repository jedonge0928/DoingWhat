import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { ThemeProvider } from "styled-components";
import { theme } from "./useViewport/theme";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import ScrollTop from "./components/ScrollTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <ScrollTop/>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
