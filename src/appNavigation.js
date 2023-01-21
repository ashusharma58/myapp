import React, { ReactElement, Suspense, useContext, useEffect } from "react";

import {
  Route,
  RouteProps,
  BrowserRouter as Router,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { BaseLayout } from "components/BaseLayout";
// import { OverlayLoader } from "components/OverlayLoader";
// import { ApplicationErrorBoundary } from "components/ApplicationErrorBoundary";
// import { DataStatus } from "common/types/datatransfer";
// import { AuthDetailContext } from "modules/common/AuthDetailProvider";
// import { APP_ROUTES } from "./routes";

export function AppNavigation({ routes }: AppNavigationProps): ReactElement {
  return (
    <Router>
      <AppRoutes routes={routes} />
    </Router>
  );
}

const AppRoutes = ({ routes }) => {
  return (
    <Suspense fallback={"...Loading"}>
      {" "}
      {/*<OverlayLoader bg="white" />}> */}
      <Switch>
        {routes.map((route) => {
          const { component, ...rest } = route;
          const RouteComponent = component;
          return (
            <Route
              key={
                Array.isArray(rest.path)
                  ? rest.path[0]
                  : rest.path
                  ? rest.path
                  : "not_found"
              }
              {...rest}
            >
              <BaseLayout>
                {/* <ApplicationErrorBoundary> */}
                <RouteComponent />
                {/* </ApplicationErrorBoundary> */}
              </BaseLayout>
            </Route>
          );
        })}
      </Switch>
    </Suspense>
  );
};
