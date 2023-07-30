import {useState} from "react";

function Login() {
    const [user,setUser] = useState("");

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
            <button>Submit</button>
        </div>
    );
}

export default Login;
