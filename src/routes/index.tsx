import React from 'react';
import { Routes, Route } from 'react-router-dom';
const Login = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "login" */ '../pages/Login'
    ),
);

const Dashboard = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "dashboard" */ '../pages/Dashboard'
    ),
);

const Project = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "project" */ '../pages/Project'
    ),
);

const ForgotPassword = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "project" */ '../pages/ForgotPassword'
    ),
);

const CreateAccount = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */ /* webpackChunkName: "project" */ '../pages/CreateAccount'
    ),
);

export const Router: React.FC = () => {
  return (
    <React.Suspense fallback={'Loading...'}>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<Project />} path="/project" />
        <Route element={<ForgotPassword />} path="/forgot-password" />
        <Route element={<CreateAccount />} path="/create-account" />
      </Routes>
    </React.Suspense>
  );
};
