import { useAuth } from "../contexts/AuthContext";

const PrivateRoutes = ({ children }) => {
  const {
    auth: { isAuthenticated },
  } = useAuth();

  return isAuthenticated ? children : <Navigate to="/signin" replace />;
};

export { PrivateRoutes };
