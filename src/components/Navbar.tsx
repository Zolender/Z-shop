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
        <nav>
            <span className="">Hello, {currentUser?.name}</span>

            <button onClick={handleLogout}>Logout</button>
        </nav>
    )
}