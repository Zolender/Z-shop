import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export function useAuth(){
    const context =  useContext(AuthContext)
    if(!context)throw new Error("This function is to be called within the AuthProvider")
    return context
}