import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRedirect = ({ children }) => {
  const token = localStorage.getItem('userToken');

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default AuthRedirect; 