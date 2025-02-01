import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Check if user is logged in
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;