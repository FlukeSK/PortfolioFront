import { useContext } from 'react';
import { AuthContext } from '../features/auth/contexts/AuthContext';

// =============== < Function > =============== //
export default function useAuth() {
  return useContext(AuthContext);
}