import { createContext, useContext, useReducer, useEffect } from 'react';
import themeReducer from './themeReducer';

export const ThemeContext = createContext();

const initialThemeState = JSON.parse(localStorage.getItem('themeSettings')) || { primary: 'color-1', background: 'bg-1' };

export const ThemeProvider = ({ children }) => {
  const [themeState, dispatchTheme] = useReducer(themeReducer, initialThemeState);
  const themeHandler = (buttonClassName) => {
    dispatchTheme({ type: buttonClassName });
  };

  // save theme to local storage
  useEffect(() => {
    localStorage.setItem('themeSettings', JSON.stringify(themeState));
  }, [themeState.primary, themeState.background]);

  return <ThemeContext.Provider value={{ themeState, themeHandler }}>{children}</ThemeContext.Provider>;
};

// Custom hook for the theme context
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
