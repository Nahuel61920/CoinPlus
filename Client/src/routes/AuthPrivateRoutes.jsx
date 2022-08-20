import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export default function AuthPrivateRoutes({ children }) {
    const {isAuthenticated} = useAuth0()
  return (
    isAuthenticated ? ( children ) : ( <Navigate to="/" /> )
  )
}
