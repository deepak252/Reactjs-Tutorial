import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../state/auth";
function Login() {
    const [user,setUser] = useState("");
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLoginClick = ()=>{
        if(!user || !user.trim()){
            return alert("Invalid username");
        }
        auth.login(user);
        navigate("/", {replace : true});
    }

    return (
        <div>
            <h2>Login</h2>
            <label>
                Username :
                <input 
                    type = "text" 
                    placeholder="Enter username"
                    value={user}
                    onChange = {(e)=>setUser(e.target.value)}
                />
            </label>
            <button  onClick={handleLoginClick}>Submit</button>
        </div>
    );
}

export default Login;
