/* eslint-disable react/prop-types */
import { createContext } from "react";
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext({
  userId: "",
  email: "",
  accessToken: "",
  isAuthenticated: false,
  changeAuthState: () => null,
  logout: () => null,
});

export function AuthContextProvider(props) {
  const [authState, setAuthState] = usePersistedState("auth", {});

  const changeAuthState = (state) => {
    setAuthState(state);
  };

  const logout = () => {
    setAuthState(null);
  };

  const contextData = {
    userId: authState?._id,
    email: authState?.email,
    accessToken: authState?.accessToken,
    isAuthenticated: !!authState?.email,
    changeAuthState,
    logout,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>
  );
}
