import "./Navbar.css";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav--primary">
            <NavLink to="/">Home</NavLink>
            <NavLink to="profile">Profile</NavLink>
            <NavLink to="login">Login</NavLink>
        </nav>
    );
}

export default Navbar;
