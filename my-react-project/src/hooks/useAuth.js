import { useContext } from "react";
import { login, register, logout } from "../api/authAPI";
import { AuthContext } from "../contexts/AuthContext";

export const useLogin = () => {
  const { changeAuthState } = useContext(AuthContext);

  const loginHandler = async (email, password) => {
    const { ...authData } = await login(email, password);
    changeAuthState(authData);

    return authData;
  };

  return loginHandler;
};

export const useRegister = () => {
  const { changeAuthState } = useContext(AuthContext);

  const registerHandler = async (email, password) => {
    const { ...authData } = await register(email, password);

    changeAuthState(authData);

    return authData;
  };

  return registerHandler;
};

export const useLogout = () => {
  const { logout: localLogout } = useContext(AuthContext);

  const logoutHandler = async () => {
    localLogout();
    await logout();
  };
  return logoutHandler;
};
