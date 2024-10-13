import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

type Props = { children: React.ReactNode, allowedRoles: string[] };

const RoleBasedRoute = ({ children, allowedRoles }: Props) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />
  } 

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />
  }

  return <>{children}</>;
}

export default RoleBasedRoute;