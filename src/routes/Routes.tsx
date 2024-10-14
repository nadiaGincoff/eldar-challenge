import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import '../App.css';
import ProtectedRoute from "./ProtectedRoute";
import RoleBasedRoute from "./RoleBasedRoute";
import AdminLayout from "../components/layouts/AdminLayout";
import UserLayout from "../components/layouts/UserLayout";
import { Navigate } from "react-router-dom";
const Login = lazy(() => import('../pages/Login'));
const Unauthorized = lazy(() => import('../pages/Unauthorized'));

const Admin = lazy(() => import('../pages/Admin'));
const Posts = lazy(() => import('../pages/Admin/Posts'));
const Users = lazy(() => import('../pages/Admin/Users'));
const AdminSettings = lazy(() => import('../pages/Admin/AdminSettings'));

const User = lazy(() => import('../pages/User'));
const PostsForUser = lazy(() => import('../pages/User/Posts'));
const Home = lazy(() => import('../pages/Home'));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home  />
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "unauthorized",
        element: <Unauthorized />,
      },
      {
        path: "admin",
        element: (
          <ProtectedRoute>
            <RoleBasedRoute allowedRoles={['admin']}> 
              <AdminLayout>
                <Admin />
              </AdminLayout>
            </RoleBasedRoute>
          </ProtectedRoute>
        ),
        children: [
          {
            path: "",
            element: <Posts />,
          },
          {
            path: "users",
            element: <Users />,
          },
          {
            path: "settings",
            element: <AdminSettings />
          }
        ]
      },
      {
        path: "user",
        element: (
          <ProtectedRoute>
            <RoleBasedRoute allowedRoles={['user']}> 
              <UserLayout>
                <User />
              </UserLayout>
            </RoleBasedRoute>
          </ProtectedRoute>
        ),
        children: [
          {
            path: "",
            element: <PostsForUser />
          }
        ]
      },
 
    ],
  },
])