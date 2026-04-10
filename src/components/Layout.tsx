import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";


export default function Layout(){
    return (
        <div className="flex flex-col w-full min-h-screen py-30  ">
            <NavBar/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}