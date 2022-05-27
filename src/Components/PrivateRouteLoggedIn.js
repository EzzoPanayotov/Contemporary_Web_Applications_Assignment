import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';

const PrivateRouteLoggedIn = ({ Component }) => {
  const { currentUser } = useAuth();

  return !currentUser ? (
    <div>
        <Component />
    </div>
  ) : (
    <Navigate to='/' />
  );
};

export default PrivateRouteLoggedIn;