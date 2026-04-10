import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";


export default function Layout(){
    return (
        <div className="flex flex-col w-full min-h-screen bg-linear-120 from-cyan-100 to-slate-400 py-30  ">
            <NavBar/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}