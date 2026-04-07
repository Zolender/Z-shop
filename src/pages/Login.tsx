import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";


export default function Login(){
    const navigate = useNavigate()
    const {login} = useAuth()

    const [formData, setFormData] = useState({email: "", password: ""})
    const [error, setError] = useState<string>("")
    const [isLoading, setIsloading] = useState<boolean>(false)

    
}