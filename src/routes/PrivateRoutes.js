import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const {
    auth: { isAuthenticated },
  } = useAuth();

  return  isAuthenticated ? children : <Navigate to="/signin" replace />;
};

export { PrivateRoutes };
