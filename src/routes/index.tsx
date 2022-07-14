import * as React from "react";
import { Navigate, RouteObject } from "react-router-dom";
import CommonLayout from "../layouts/CommonLayout";
import Login from "../pages/Login";
import NotFound404 from "../pages/NotFound404";
import Private from "./Private";

// use lazy imports for routes under app
const AppLayout = React.lazy(() => import("../layouts/AppLayout"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const Member = React.lazy(() => import("../pages/Members"));

export default [
  {
    path: "/app",
    element: (
      <Private>
        <AppLayout />
      </Private>
    ),
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
