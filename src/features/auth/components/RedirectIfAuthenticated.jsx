import { Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/use-auth';

export default function RedirectIfAuthenticated({ children }) {
  const { authUser } = useAuth();
  return authUser ? <Navigate to="/" /> : children;
}