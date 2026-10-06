import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate(); 
    
    function handleLogin(e){
        e.preventDefault(); 

        if (userName === "Admin" && password === "12345") {
            localStorage.setItem("isLogin", "true");
            navigate("/dashboard");  
        }
        else {
            alert("Invalid Credentials")
        }
    }
    return(
        <>
            <h1>Login</h1> 
            <form onSubmit={handleLogin}>

                <input type="text" placeholder="Enter Username" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}