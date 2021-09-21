import { createContext, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const DarkModeContext = createContext();

export const DarkModeProvider = (props) => {
  // const intialState = { darkMode: false };
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  // const [state, dispatch] = useReducer(darkModeReducer, intialState);
  return (
    <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

const darkModeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      return state;
  }
};
