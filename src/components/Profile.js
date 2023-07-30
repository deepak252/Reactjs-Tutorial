import { useAuth } from "../state/auth";

function Profile() {
    const auth = useAuth();

    const handleLogoutClick = ()=>{
        auth.logout();
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
