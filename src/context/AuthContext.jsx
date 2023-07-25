import { createContext, useContext, useEffect, useState } from "react";
import * as auth from "../services/authServices";
import { tokenKey } from "../config";
import { useNavigate } from "react-router-dom";
import { createUser, getUser } from "../services/userService";

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

  function signup(newUserData) {
    createUser(newUserData).then(data => {
      setUser(data)
      navigate("/")
    }).catch(console.log)
  }

  const value = {
    user,
    login,
    logout,
    signup,
  };

  useEffect(() => {
    getUser().then(data => setUser(data)).catch(console.log)
  }, [])

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
