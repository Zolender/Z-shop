import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";


export default function ProtectedRoute(){
    const {currentUser} = useAuth()
    if(!currentUser){
        return <Navigate to="/login" replace/>
    }
    return <Outlet/>
}