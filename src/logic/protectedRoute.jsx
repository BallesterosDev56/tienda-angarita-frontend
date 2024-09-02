// ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem('userState');
  

  if (isAuthenticated === false || isAuthenticated === null) {
    return <Navigate to="/tienda-angarita/login" />;
  }

  return children;
};
