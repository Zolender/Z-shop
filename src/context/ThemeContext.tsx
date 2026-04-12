import { useState } from "react";
import { createContext } from "react";

type Theme = "light" | "dark"

type ThemeContextType = {
    theme: Theme
    toggleTheme: ()=>void
}


export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({children}: {children: React.ReactNode}){
    const [theme, setTheme] = useState<Theme>(()=>{
        const stored = localStorage.getItem("theme")
        return stored? stored as Theme: "light" as Theme
    })

    function toggleTheme(){
        setTheme(prev=>{
            const newTheme= prev==="dark"? "light": "dark"
            localStorage.setItem("theme", newTheme) 
            return newTheme
        })
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

