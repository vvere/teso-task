import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'store/types';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { token } = useAppSelector(state => state.user);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
