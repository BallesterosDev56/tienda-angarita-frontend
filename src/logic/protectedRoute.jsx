// ProtectedRoute.jsx
import { useAuth } from './authContext';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  

  if (!isAuthenticated) {
    return <Navigate to="/tienda-angarita/login" />;
  }

  return children;
};
