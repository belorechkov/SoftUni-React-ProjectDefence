import { useState } from "react";

export default function usePersistedState(key, initialState) {
  const [state, setState] = useState(() => {
    const authPersisted = localStorage.getItem("auth");

    if (!authPersisted) {
      return typeof initialState === "function" ? initialState() : initialState;
    }

    const persistedData = JSON.parse(authPersisted);

    return persistedData;
  });

  const updateState = (value) => {
    const newState = typeof value === "function" ? value(state) : value;

    if (newState === null || newState === undefined) {
      setState(null);
      return localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(newState));
    }

    setState(newState);
  };

  return [state, updateState];
}
