import { Navigate } from "react-router-dom";
import Layout from "./Layout";
import { useAuth } from "../hooks/useAuth";


export default function ProtectedRoute(){
    const {currentUser} = useAuth()
    if(!currentUser){
        return <Navigate to="/login" replace/>
    }
    return <Layout/>
}