import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthMiddleware = ({ children, requireAuth = true }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const userToken = localStorage.getItem('userToken');
      
      // If auth is required and user is not logged in
      if (requireAuth && !userToken) {
        navigate('/login', { state: { from: location.pathname } });
        return;
      }

      // If auth is not required (public routes) and user is logged in
      if (!requireAuth && userToken) {
        navigate('/dashboard');
        return;
      }

      setIsChecking(false);
    };

    checkAuth();
  }, [navigate, location, requireAuth]);

  if (isChecking) {
    return (
      <div className="h-[calc(100vh-6rem)] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return children;
};

export default AuthMiddleware; 