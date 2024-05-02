import React from 'react'; // Import de React pour pouvoir utiliser la syntaxe JSX et les fonctionnalités de React
import ReactDOM from 'react-dom/client' // Import de ReactDOM pour pouvoir rendre les composants React dans le DOM
import App from './App/App'; // Import du composant principal de l'application
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root")); // Création d'une racine de rendu ReactDOM, qui sera attachée à l'élément avec l'ID 'root' dans le DOM

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);