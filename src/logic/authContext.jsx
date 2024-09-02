// AuthContext.jsx
import { createContext, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const login = () => {
    let existItem = sessionStorage.getItem('userState');

    if (existItem !== null) {
      sessionStorage.removeItem('userState');
    }
    sessionStorage.setItem('userState', 'true');
  }

  const logout = () => {
    let existItem = sessionStorage.getItem('userState');

    if (existItem !== null) {
      sessionStorage.removeItem('userState');
    }
    sessionStorage.setItem('userState', 'false');
  }

  return (
    <AuthContext.Provider value={{login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

