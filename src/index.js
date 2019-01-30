import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'mobx-react';
import App from "./app/pages";
import controller from "./controller";
import registerServiceWorker from "./registerServiceWorker";
import { Router } from 'react-router-dom';
import history from "app/utils/history"
import { ThemeProvider } from "styled-components";
import theme from 'common/theme';
import "./index.css";

ReactDOM.render(
  <Provider {...controller.provide()}>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
