import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function NavBar(){
    const {currentUser, logout} = useAuth()
    const navigate = useNavigate()

    const handleLogout = ()=>{
        logout()
        navigate("/login", {replace: true})
    }

    return(
        <nav className="flex fixed top-0 h-15 justify-between bg-linear-90 z-100 from-green-200 to-blue-200 px-10 w-full items-center">
            <span className="text-2xl font-mono">Hello, <span className="text-red-300">{currentUser?.name}</span></span>

            <button className="bg-red-500 text-slate-100 px-5 py-1 rounded-md hover:bg-red-600 hover:cursor-pointer transition-colors ease-in-out duration-200" onClick={handleLogout}>Logout</button>
        </nav>
    )
}