import { useState } from "react";
import useFetch from "../hooks/useFetch";

const Login = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleSubmit = (e)=>{
        e.preventDefault()
    }



    return (
        <div className="">

            <form onSubmit={e=>handleSubmit(e)}>
                <label htmlFor="email">Email: </label>
                <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} /> <br />
                <label htmlFor="paswword">Password:</label>
                <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} /> <br />
                <input type="submit" value="Login" />
            </form>
        
        </div>
    );
}

export default Login;


