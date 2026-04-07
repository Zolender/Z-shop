import { createContext, useContext, useState } from "react"


type User ={
    id: string
    name: string
    email: string
    password: string
    role: string
    creationAt: string
    updatedAt: string
}

type AuthContextType = {
    currentUser: User | null
    login: (user: User)=> void
    logout: ()=> void
}


const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({children}: {children: React.ReactNode}){
    const [currentUser, setCurrentUser]= useState(()=>{
        const stored = localStorage.getItem("currentUser")
        return stored? JSON.parse(stored): null
    })

    const login = (user: User)=>{
        setCurrentUser(user)
        localStorage.setItem("currentUser", JSON.stringify(user))
    }

    const logout = ()=>{
        setCurrentUser(null)
        localStorage.removeItem("currentUser")
    }

    return (
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context =  useContext(AuthContext)
    return context
}