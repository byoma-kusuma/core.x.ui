import { exact } from "prop-types";
import * as React from "react";
import { Navigate, RouteObject } from "react-router-dom";
import CommonLayout from "../layouts/CommonLayout";
import Groups from "../pages/Groups";
import Group from "../pages/Groups/CreateUpdateGroup";
import GroupDetail from "../pages/Groups/GroupDetail";
import Login from "../pages/Login";
import NotFound404 from "../pages/NotFound404";
import ResetPassword from "../pages/ResetPassword";
import RequestResetPassword from "../pages/ResetPassword/RequestResetPassword";
import Users from "../pages/Users";
import User from "../pages/Users/User";
import Private from "./PrivateRoute";

// use lazy imports for routes under app
const AppLayout = React.lazy(() => import("../layouts/AppLayout"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const Members = React.lazy(() => import("../pages/Members"));
const Member = React.lazy(() => import("../pages/Members/Member"));

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

      // members routes
      { path: "members", element: <Members />, exact },
      { path: "members/:id", element: <Member />, exact },
      { path: "members/new", element: <Member />, exact },

      // users routes
      { path: "users", element: <Users />, exact },
      { path: "users/:id", element: <User />, exact },

      // group routes
      { path: "groups", element: <Groups />, exact },
      { path: "groups/new", element: <Group />, exact },
      { path: "groups/:id", element: <Group />, exact },
      { path: "groups/:id/details", element: <GroupDetail />, exact }
    ]
  },
  {
    path: "/",
    element: <CommonLayout />,
    children: [
      { path: "/", element: <Navigate to="/app/dashboard" replace /> },
      { path: "login", element: <Login /> },
      { path: "password-reset/request", element: <RequestResetPassword /> },
      { path: "password-reset/verify", element: <ResetPassword /> },
      { path: "404", element: <NotFound404 /> }
    ]
  },
  { path: "*", element: <Navigate to="/404" /> }
] as Array<RouteObject>;
