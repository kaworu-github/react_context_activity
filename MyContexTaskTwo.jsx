import { createContext, useContext, useState } from "react";
import "../App.css";

const ThemeContext = createContext(null);

let ThemeProvider = ({children}) => {
    let [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => setIsDarkTheme(prevThemeState => !prevThemeState);
    let value={
      isDarkTheme, 
      toggleTheme
    };

    return(
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

const useTheme = () => {
    let context = useContext(ThemeContext);
  
    if (!context)
      throw new Error(
        "useTheme должен использоваться внутри ThemeProvider."
      );
  
    return context;
  };
export {useTheme, ThemeProvider};