import React from 'react'
import './nav.css'
import Logo from '../../Components/Logo/Logo'
import "../../Components/Logo/logo.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="main-nav">
            
            <Logo className="logo"/>
            
            <div>
            <Link to="sign-in" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                <span> Sign In</span>
            </Link>
            </div>
        </nav>
    )
}

export default Nav;