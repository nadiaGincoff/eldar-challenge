import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProtectedRoute from "./ProtectedRoute";
const LoginPage = lazy(() => import('../pages/LoginPage'));
const HomePage = lazy(() => import('../pages/HomePage'));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        )
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
])