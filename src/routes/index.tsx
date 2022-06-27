import * as React from "react";
import { Navigate, RouteObject } from "react-router-dom";
import CommonLayout from "../layouts/CommonLayout";

// lazy imports
const AppLayout = React.lazy(() => import("../layouts/AppLayout"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const Login = React.lazy(() => import("../pages/Login"));
const NotFound404 = React.lazy(() => import("../pages/NotFound404"));
const Member = React.lazy(() => import("../pages/Members"));

export default [
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      { path: "/app", element: <Navigate to="/app/dashboard" replace /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "members", element: <Member /> }
    ]
  },
  {
    path: "/",
    element: <CommonLayout />,
    children: [
      { path: "/", element: <Navigate to="/app/dashboard" replace /> },
      { path: "login", element: <Login /> },
      { path: "404", element: <NotFound404 /> }
    ]
  },
  { path: "*", element: <Navigate to="/404" /> }
] as Array<RouteObject>;
