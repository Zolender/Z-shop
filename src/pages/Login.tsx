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
        <div className="flex flex-col w-full min-h-screen bg-[#17cded86] py-20 items-center ">
            <h1 className="text-3xl font-bold font-mono text-gray-700 mb-10">Login</h1>
            <form onSubmit={handleSubmit} className="flex flex-col justify-between border-blue-300-2 w-90 h-90 rounded-md px-5 py-10 shadow-cyan-700 shadow-lg">
                <div>
                    <label className="text-2xl font-mono block" htmlFor="email">Email</label>
                    <input className="border-gray-500 border-2 w-full rounded-md px-5 text-slate-900 font-mono focus:outline-0 hover:shadow-blue-300 h-10 transition-all ease-in hover:shadow-md" type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="eben@gmail.com" />
                </div>
                <div>
                    <label className="text-2xl font-mono block " htmlFor="password">Password</label>
                    <input className="border-gray-500 border-2 w-full rounded-md px-5 text-slate-900 font-mono focus:outline-0 hover:shadow-blue-300 h-10 transition-all ease-in hover:shadow-md" type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
                </div>

                {error && <p className="text-red-400 font-mono">{error}</p>}


                <button className="border-0 bg-cyan-500 rounded-md h-10 hover:cursor-pointer hover:bg-cyan-600 transition-all ease-in duration-300 text-slate-100 hover:scale-105 active:scale-90 active:bg-cyan-900" type="submit" disabled={isLoading}>{isLoading? "Logging in..." : "Login"}</button>

            </form>
        </div>
    )
}