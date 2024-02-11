import { exact } from "prop-types";
import * as React from "react";
import { Navigate, RouteObject } from "react-router-dom";
import CommonLayout from "layouts/CommonLayout";
import Abhisekhas from "pages/Abhisekha";
import AbhisekhaDetailPage from "pages/Abhisekha/AbhisekhaDetailPage";
import CreateUpdateAbhisekhaPage from "pages/Abhisekha/CreateUpdateAbhisekhaPage";
import Events from "pages/Event";
import Groups from "pages/Groups";
import Group from "pages/Groups/CreateUpdateGroupPage";
import GroupDetail from "pages/Groups/GroupDetailPage";
import Login from "pages/Login";
import NotFound404 from "pages/NotFound404";
import ResetPassword from "pages/ResetPassword";
import RequestResetPassword from "pages/ResetPassword/RequestResetPasswordPage";
import Resources from "pages/Resource";
import CreateUpdateResourcePage from "pages/Resource/CreateUpdateResourcePage";
import ResourceDetailPage from "pages/Resource/ResourceDetailPage";
import Users from "pages/Users";
import User from "pages/Users/UserDetailPage";
import Private from "./PrivateRoute";

// use lazy imports for routes under app
const AppLayout = React.lazy(() => import("layouts/AppLayout"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const Members = React.lazy(() => import("pages/Members"));
const CreateMember = React.lazy(() => import("pages/Members/CreateMemberPage"));

export default [
  {
    path: "/app",
    element: (
      <Private>
        <AppLayout />
      </Private>
    ),
    children: [
      { path: "/app", element: <Navigate to="/app/members" replace /> },
      { path: "dashboard", element: <Dashboard /> },

      // members routes
      { path: "members", element: <Members />, exact },
      { path: "members/:id", element: <CreateMember />, exact },
      { path: "members/new", element: <CreateMember />, exact },

      // users routes
      { path: "users", element: <Users />, exact },
      { path: "users/:id", element: <User />, exact },

      // group routes
      { path: "groups", element: <Groups />, exact },
      { path: "groups/new", element: <Group />, exact },
      { path: "groups/:id", element: <Group />, exact },
      { path: "groups/:id/details", element: <GroupDetail />, exact },

      // abhisekha routes
      { path: "abhisekhas", element: <Abhisekhas />, exact },
      { path: "abhisekhas/new", element: <CreateUpdateAbhisekhaPage />, exact },
      { path: "abhisekhas/:id", element: <CreateUpdateAbhisekhaPage />, exact },
      {
        path: "abhisekhas/:id/details",
        element: <AbhisekhaDetailPage />,
        exact
      },

      // resource routes
      { path: "resources", element: <Resources />, exact },
      { path: "resources/new", element: <CreateUpdateResourcePage />, exact },
      { path: "resources/:id", element: <CreateUpdateResourcePage />, exact },
      {
        path: "resources/:id/details",
        element: <ResourceDetailPage />,
        exact
      },

      // events routes
      { path: "events", element: <Events />, exact }
      // { path: "resources/new", element: <CreateUpdateResourcePage />, exact },
      // { path: "resources/:id", element: <CreateUpdateResourcePage />, exact },
      // {
      //   path: "resources/:id/details",
      //   element: <ResourceDetailPage />,
      //   exact
      // }
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
