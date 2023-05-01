import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { Role } from 'entities/user/model/user.model';
import useAuth from 'entities/user/api/lib/useAuth';

const ProtectedRoute = ({ allowedRoles }: { allowedRoles: Role[] }) => {
  const currRole = useAuth(state => state.role)
  return allowedRoles.find((role: Role) => currRole?.includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate to='/login' replace />
  )
}

export default ProtectedRoute;