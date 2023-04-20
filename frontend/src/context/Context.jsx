import { createContext, useState } from "react";
export const Context = createContext({});

export default function ContextProvider({ children }) {
  let data = {
    proof: "a",
  };
  const [appState, setAppState] = useState(data);
  return (
    <Context.Provider value={{ appState, setAppState }}>
      {children}
    </Context.Provider>
  );
};
