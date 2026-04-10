import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import Layout from "./Layout";


export default function ProtectedRoute(){
    const {currentUser} = useAuth()
    if(!currentUser){
        return <Navigate to="/login" replace/>
    }
    return <Layout/>
}