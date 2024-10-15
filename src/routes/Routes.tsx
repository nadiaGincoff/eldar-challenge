import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import '../App.css';
import ProtectedRoute from "./ProtectedRoute";
import RoleBasedRoute from "./RoleBasedRoute";
import AdminLayout from "../components/layouts/AdminLayout";
import UserLayout from "../components/layouts/UserLayout";

const Login = lazy(() => import('../pages/Login'));
const Unauthorized = lazy(() => import('../pages/Unauthorized'));

const Admin = lazy(() => import('../pages/Admin'));
const Posts = lazy(() => import('../pages/Admin/Posts'));
const Users = lazy(() => import('../pages/Admin/Users'));
const AdminSettings = lazy(() => import('../pages/Admin/AdminSettings'));

const User = lazy(() => import('../pages/User'));
const PostsForUser = lazy(() => import('../pages/User/Posts'));
const Post = lazy(() => import('../pages/User/Post'));
const Home = lazy(() => import('../pages/Home'));

const Error = lazy(() => import('../components/Error'));

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
        errorElement: <div>Something went wrong</div>,
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
        errorElement: <Error />,
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
            element: <PostsForUser />,
          },
          {
            path: "post/:id",
            element: <Post />
          }
        ]
      },
 
    ],
  },
])