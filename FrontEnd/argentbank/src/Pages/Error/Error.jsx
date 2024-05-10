import React from 'react';
import { Link } from 'react-router-dom';
import './error.css'

function Error() {
    return (
    <div className="error-container">
    <h1 className="error-title">Error 404</h1>
    <h2 className="error-subtitle">La page que vous demandez n'existe pas.</h2>
    <Link to="/" className="error-link">Retourner sur la page d'accueil</Link>
    </div>
    );
}
export default Error;