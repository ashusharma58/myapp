import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const LoginPage = lazy(() => import("./LoginPage"));
const SelectLanguagePage = lazy(() => import("./SelectLanguage"));
const HomePage = lazy(() => import("./App" /* webpackChunkName: "HomePage" */));
const AccountPage = lazy(() =>
  import("./AccountPage" /* webpackChunkName: "HomePage" */)
);
const FundTransferPage = lazy(() =>
  import("./FundTransferPage" /* webpackChunkName: "HomePage" */)
);
const ErrorPage = lazy(() =>
  import("./components/ErrorPage" /* webpackChunkName: "HomePage" */)
);

export const APP_ROUTES = {
  HOME: "/",
  ACCOUNT_PAGE: "/accounts",
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SelectLanguagePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/accounts",
    element: <AccountPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/fund-transfer",
    element: <FundTransferPage />,
    errorElement: <ErrorPage />,
  },
  //   {
  //     path: "/login",
  //     element: <LoginPage />,
  //     errorElement: <ErrorPage />,
  //   },
]);
