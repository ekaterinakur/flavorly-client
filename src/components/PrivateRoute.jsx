import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute({
  redirectPath = '/',
}) {
  const isAuthenticated = true; // TODO auth check

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}
