import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";


export default function Login(){
    const navigate = useNavigate()
    const {login} = useAuth()

    const [formData, setFormData] = useState({email: "", password: ""})
    const [error, setError] = useState<string>("")
    const [isLoading, setIsloading] = useState<boolean>(false)

    function handleChange (e: React.ChangeEvent<HTMLInputElement>){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function validate(): boolean{
        if(!formData.email || !formData.password){
            setError("All fields are required.")
            return false
        }
        return true
    }

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
        e.preventDefault()
        setError("")

        if(!validate())return

        setIsloading(true)
        try{
            const response = await fetch("https://api.escuelajs.co/api/v1/users")
            if(!response.ok)throw new Error("Failed to fetch users")
            const users = await response.json()

            const match = users.find((user: {email: string; password: string})=> user.email === formData.email && user.password === formData.password)

            if(!match){
                setError("Invalid email or Password")
                return
            }

            login(match)
            navigate("/categories", {replace: true})
        }catch(err){
            setError(`Something went wrong: ${error}`)
        }finally{
            setIsloading(false)
        }

    }

    return (
        <div className="">
            <h1 className="">Login</h1>
            <form onSubmit={handleSubmit} className="">
                <div>
                    <label htmlFor="email">Email</label>
                    <input className="" type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="eben@gmail.com" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input className="" type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
                </div>

                {error && <p className="text-red-400">{error}</p>}


                <button type="submit" disabled={isLoading}>{isLoading? "Logging in..." : "Login"}</button>

            </form>
        </div>
    )
}