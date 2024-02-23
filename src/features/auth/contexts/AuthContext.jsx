import { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";

import * as authApi from "../../../api/auth";
import * as userApi from "../../../api/user";
import { clearToken, getToken, storeToken } from "../../../utils/local-storage";

export const AuthContext = createContext();

// =============== < function > =============== //
export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  // =============== < useEffect > =============== //
  useEffect(() => {
    if (getToken()) {
      authApi
        .fetchMe()
        .then((res) => {
          setAuthUser(res.data.user);
        })
        .catch((err) => {
          toast.error(err.response?.data.message);
        })
        .finally(() => setInitialLoading(false));
    } else {
      setInitialLoading(false);
    }
  }, []);

  // =============== < Register > =============== //
  const register = async (user) => {
    const res = await authApi.register(user);
    console.log(res)
    setAuthUser(res.data.newUser);
    storeToken(res.data.accessToken);
  };

  // =============== < Login > =============== //
  const login = async (credential) => {
    const res = await authApi.login(credential);
    setAuthUser(res.data.user);
    storeToken(res.data.accessToken);
  };

  // =============== < Logout > =============== //
  const logout = () => {
    setAuthUser(null);
    clearToken();
  };

  // =============== < Update > =============== //
  const updateUser = async (user) => {
    const res = await userApi.updateUser(user);
    setAuthUser((prev) => ({ ...prev, ...res.data }));
  };

  // =============== < Return > =============== //
  return (
    <AuthContext.Provider
      value={{ register, authUser, login, initialLoading, logout, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
