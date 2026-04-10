import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";
import { useTheme } from "../context/ThemeContext";


export default function Layout(){
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={`flex flex-col w-full min-h-screen py-30 relative transition-colors duration-300 ease-in-out ${theme==="light"? "bg-slate-100": "bg-slate-600"} `}>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}