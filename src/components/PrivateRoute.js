import { Navigate } from "react-router-dom";
import { useAuth } from "store/auth/selectors/utils";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
 const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  if (shouldRedirect) { return <Navigate to={redirectTo} /> };
  return Component;
  
  
};