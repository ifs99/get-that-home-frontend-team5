import { createContext, useContext, useState } from "react";
import * as auth from "../services/authServices";
import { tokenKey } from "../config";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  function login(credentials) {
    auth.login(credentials).then(setUser).catch(console.log);
  }
  function logout() {
    auth.logout().then(() => {
      setUser(null);
      navigate("/");
      sessionStorage.removeItem(tokenKey);
    });
  }

  const value = {
    user,
    setUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
