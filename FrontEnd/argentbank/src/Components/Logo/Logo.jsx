import React from 'react';
import { Link } from "react-router-dom";
import argentBankLogo from "../../assets/img/argentBankLogo.webp";
import "./logo.css";

function Logo() {
    return(
        <Link to="/" className="logo">
            <img className="logoImg" src={argentBankLogo} alt="Argent Bank Logo"/>
        </Link>
    );
}

export default Logo;