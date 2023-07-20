import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);

  const value = {
    user,
    setUser,
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext)
}

export {AuthProvider, useAuth}