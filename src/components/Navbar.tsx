import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { Sun,  Moon } from "lucide-react";

export default function NavBar(){
    const {currentUser, logout} = useAuth()
    const navigate = useNavigate()
    const {theme, toggleTheme} = useTheme()

    const handleLogout = ()=>{
        logout()
        navigate("/login", {replace: true})
    }

    return(
        <nav className={`flex fixed top-0 h-15 justify-between bg-linear-90 z-100 transition-colors duration-300 ease-in-out ${theme==="light"? "from-green-200 to-blue-200" : "from-slate-700 to-slate-500"} px-10 w-full items-center`}>
            <span className={`text-2xl font-mono ${theme==="light"? "text-slate-700": "text-slate-200"}`}>Hello, <span className={`${theme==="light"? "text-red-900": "text-yellow-400"}`}>{currentUser?.name}</span></span>

            <div className={`flex gap-5`}>
                <button className={`bg-red-500 text-slate-100 px-5 py-1 rounded-md hover:bg-red-600 hover:cursor-pointer transition-colors ease-in-out duration-200`} onClick={handleLogout}>Logout</button>
                <button className={`hover:cursor-pointer`} onClick={toggleTheme}>{theme==="light"?<Moon size={22}/> : <Sun size={22} /> }</button>
            </div>        
        </nav>
    )
}