import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const AuthMiddleware = ({ children, requireAuth = true }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, loading } = useAuth();

  React.useEffect(() => {
    if (!loading) {
      // If auth is required and user is not logged in
      if (requireAuth && !isAuthenticated) {
        navigate('/login', { state: { from: location.pathname } });
        return;
      }

      // If auth is not required (public routes) and user is logged in
      if (!requireAuth && isAuthenticated) {
        navigate('/dashboard');
        return;
      }
    }
  }, [navigate, location, requireAuth, isAuthenticated, loading]);

  if (loading) {
    return (
      <div className="h-[calc(100vh-6rem)] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return children;
};

export default AuthMiddleware; 