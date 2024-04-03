import React, { createContext, useState } from "react";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  // Define the initial state
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedStat, setSelectedStat] = useState(null);
  return (
    <AuthContext.Provider
      value={{ loggedIn, setLoggedIn, selectedStat, setSelectedStat }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
