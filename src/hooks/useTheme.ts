import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export function useTheme(){
    const theme = useContext(ThemeContext)
    if(!theme)throw new Error("The theme must be used inside the provider's components")
    return theme
}