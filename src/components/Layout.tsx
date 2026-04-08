import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";


export default function Layout(){
    return (
        <div className="flex flex-col w-full min-h-screen bg-[#f7f7c7c3]">
            <NavBar/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}