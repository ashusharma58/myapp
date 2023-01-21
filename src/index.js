import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18n.js";
// import { AppNavigation } from "./appNavigation";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
// import { ChakraProvider } from "@chakra-ui/react";
// import { theme } from "./theme";
import AppLoader from "./components/AppLoader";
import { Provider } from "react-redux";
// import { ConnectedRouter } from "react-router-redux";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import store, { history } from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback="...loading">
      {/* <ChakraProvider theme={theme */}
      {/* <Provider store={store}>
        <ConnectedRouter history={history}> */}
      <RouterProvider router={router} />
      {/* </ConnectedRouter>
      </Provider> */}
      {/* </ChakraProvider> */}
      {/* <App /> */}
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
