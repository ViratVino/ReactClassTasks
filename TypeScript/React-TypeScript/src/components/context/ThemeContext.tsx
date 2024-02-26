import { createContext } from "react";
import { theme } from "./theme";
type ThemeProvider={
    children:React.ReactNode
}

export const ThemeContext=createContext(theme);

export const ThemeContexProvider=({children}:ThemeProvider)=>{
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}


