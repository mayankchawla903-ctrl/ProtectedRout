import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate()

    function handleLogOut() {
        localStorage.clear(); 
        navigate("/login"); 
    }
    
    return (
        <>
        <h1>Dashboard</h1>

        <button onClick={handleLogOut}>Log Out</button>
        </>
    )
}