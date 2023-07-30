
function Profile() {

    const handleLogoutClick = ()=>{

    }
    return (
        <div>
            <h2>Profile</h2>
            <h4>Hello user</h4>
            <button onClick={handleLogoutClick} >Logout</button>
        </div>
    );
}

export default Profile;
