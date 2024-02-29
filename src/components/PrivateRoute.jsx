import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <Spinner />;
  }

  return isAuthenticated ? (
    <Outlet>{children}</Outlet>
  ) : (
    <Navigate to="/sign-in" />
  );
};

export default PrivateRoute;
