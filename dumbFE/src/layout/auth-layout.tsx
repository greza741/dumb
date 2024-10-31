import { useAppSelector } from "@/stores";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const authState = useAppSelector((state) => state.auth);
  const location = useLocation();

  if (authState.token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default AuthLayout;
