import { createContext, useContext, useState } from "react";
import * as auth from "../services/authServices";
import { tokenKey } from "../config";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);

  function login(credentials) {
    auth.login(credentials).then(setUser).catch(console.log);
  }
  function logout() {
    auth.logout().then(() => {
      setUser(null);
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
  return useContext(AuthContext)
}

export {AuthProvider, useAuth}