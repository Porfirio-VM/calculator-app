import { useState, useEffect, createContext } from "react";
import { themes } from "../themes";

export const themeContext = createContext();

export default function ThemeProvider({ children }){
    const [actualTheme, setTheme] = useState(themes.firstTheme)
    
    useEffect(() => {
        const rootElement = document.getElementById('root');
        rootElement.style.backgroundColor = actualTheme.bodySection.background
      }, [actualTheme])
    
    const changeTheme = (e) =>{
      const radioValue = e.target.value;
      setTheme(themes[radioValue])
    } 

    const contextValue = {
      changeTheme,
      actualTheme
    }

    return (
      <themeContext.Provider value={contextValue}>
        {children}
      </themeContext.Provider>
    )
}