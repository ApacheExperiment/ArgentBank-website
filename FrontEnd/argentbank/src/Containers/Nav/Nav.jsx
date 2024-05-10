import React from 'react'
import './nav.css'
import Logo from '../../Components/Logo/Logo'
import "../../Components/Logo/logo.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Services/authService"

function Nav() {
    // Obtention des informations sur l'utilisateur et le statut d'authentification depuis Redux store
    const { userName } = useSelector((state) => state.userProfile);
    const isConnected = useSelector((state) => state.isConnected);

    // Obtention de l'emplacement actuel en utilisant useLocation de React Router
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Gestion de la déconnexion de l'utilisateur
    const handleLogout = () => {
        logout(dispatch); // Appel de la fonction logout depuis authService.js
        navigate("/"); // Redirection à la page d'accueil
    };

    const displayNav = () =>  {
        if (location.pathname === "/profile/edit-user-name") {
            return (
                <div className="main-nav-green">
                    <Link to="#" className="main-nav-item">
                        <span>{userName}</span>
                        <i className="fa fa-user-circle"></i>
                    </Link>
                    <Link to="#" className="main-nav-item">
                        <i className="fa fa-gear"></i>
                    </Link>
                    <Link onClick={handleLogout} to="/">
                        <i className="fa-solid fa-power-off"></i>
                    </Link>
                </div>
            );
        }
        return isConnected ? (
            <>
            <Link to="profile" className="main-nav-item">
                {userName}
            </Link>
            <Link onClick={handleLogout} to="/" className="main-nav-item">
                <i className="fa fa-sign-out"></i>
                <span className="main-nav-item sign-out">Sign Out</span>
            </Link>
            </>
        ) : (
            <Link to="sign-in" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                <span>Sign In</span>
            </Link>
        );
    };

    return (
        <nav className="main-nav">
            <Logo className="logo"/>
            <div className="main-nav-links-wrapper">{displayNav()}</div>
        </nav>
    )
}

export default Nav;