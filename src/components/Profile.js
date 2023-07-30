import { useAuth } from "../state/auth";
import { useNavigate } from "react-router-dom";

function Profile() {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogoutClick = ()=>{
        auth.logout();
        navigate('/');
    }

    return (
        <div>
            <h2>Profile</h2>
            <h4>Hello {auth.user}</h4>
            <button onClick={handleLogoutClick} >Logout</button>
        </div>
    );
}

export default Profile;
