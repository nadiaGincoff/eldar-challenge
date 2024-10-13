import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProtectedRoute from "./ProtectedRoute";
import RoleBasedRoute from "./RoleBasedRoute";
import '../App.css';

const Login = lazy(() => import('../pages/Login'));

const Admin = lazy(() => import('../pages/Admin'));
const Posts = lazy(() => import('../pages/Admin/Posts'));
const Users = lazy(() => import('../pages/Admin/Users'));
const AdminSettings = lazy(() => import('../pages/Admin/AdminSettings'));

const User = lazy(() => import('../pages/User'));
const PostsForUser = lazy(() => import('../pages/User/Posts'));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "admin",
        element: (
          <ProtectedRoute>
            <RoleBasedRoute allowedRoles={['admin']}> 
              <Admin />
            </RoleBasedRoute>
          </ProtectedRoute>
        ),
        children: [
          {
            path: "posts",
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
              <User />
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