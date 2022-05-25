import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [auth, setAuth] = useState({
    isAuthenticated: localStorage.getItem("TOKEN") ? true : false,
    token: localStorage.getItem("TOKEN") || null,
  });

  const logoutHandler = () => {
    localStorage.removeItem("TOKEN");
    setAuth((prev) => ({
      ...prev,
      isAuthenticated: false,
      token: null,
    }));
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = ()=>useContext(AuthContext);


export { AuthProvider, useAuth };
