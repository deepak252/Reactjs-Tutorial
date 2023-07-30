import React from 'react';
import "./Navbar.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {

    const navLinkStyle =({isActive}) =>{
        return {
            textDecoration : isActive ? 'none' : 'underline',
            fontWeight : isActive ? 'bold' : 'normal'
        }
    }

    return (
        <nav className='nav--primary'>
            <NavLink style = {navLinkStyle} to = "/">Home</NavLink>
            <NavLink style = {navLinkStyle} to = "about">About</NavLink>
            <NavLink style = {navLinkStyle} to = "products">Products</NavLink>
        </nav>
    )
}

export default Navbar