import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'; // Utilisation du hook useLocation pour obtenir l'URL actuelle

import "./logo.css";
import argentBankLogo from "../../assets/img/argentBankLogo.webp";
import argentBankCoffre from "../../assets/img/argentBankCoffre.webp";
import coffre from "../../assets/img/Coffre.webp";

function Logo() {
    const location = useLocation();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Utilisation du hook pour suivre la largeur de la fenêtre

    useEffect(() => {   // Utilisation du hook pour mettre à jour la largeur de la fenêtre lorsqu'elle change
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <Link to="/" className="logo">
            {location.pathname.includes("edit-user-name") ? ( // Affichage conditionnel du logo en fonction de la route ou de la largeur de la fenêtre
                <>
                {windowWidth >= 650 ? (
                <img className="logoImg" src={argentBankCoffre} alt="Argent Bank Logo"/>
                ) : (
                <img className="coffre" src={coffre} alt="Argent Bank Logo"/>
                )}
                </>
            ) : (
                <>
                <img className="logoImg" src={argentBankLogo} alt="Argent Bank Logo"/>
                </>
            )
        }
        </Link>
    );
}

export default Logo;