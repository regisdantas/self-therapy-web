import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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

import { isAuthenticated } from '../services/auth';

interface IProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: IProtectedRouteProps) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export const Router: React.FC = () => {
  return (
    <React.Suspense fallback={'Loading...'}>
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
          path="/"
        />
        <Route
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
          path="/dashboard"
        />
        <Route
          element={
            <ProtectedRoute>
              <Project />
            </ProtectedRoute>
          }
          path="/project"
        />
        <Route element={<Login />} path="/login" />
        <Route element={<ForgotPassword />} path="/forgot-password" />
        <Route element={<CreateAccount />} path="/create-account" />
      </Routes>
    </React.Suspense>
  );
};
