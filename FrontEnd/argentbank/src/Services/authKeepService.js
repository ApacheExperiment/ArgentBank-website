import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthKeep = ({ children }) => {             // Composant protégeant les routes nécessitant une connexion utilisateur
  
  const isConnected = useSelector((state) => state.isConnected);  // Le hook vient récupérer l'état de connexion utilisateur depuis le store Redux
  const [loading, setLoading] = useState(true);   // State local gérant l'affichage du chargement

  useEffect(() => {                               // useEffect gère le chargement et la redirection en fonction de l'état de connexion

    if (isConnected !== null) {                   // Vérification si le state d'authentification est chargé
      setLoading(false);                          // Si c'est le cas, le chargement s'arrête
    } else {
      setTimeout(() => {                          // ISi non, un délai est enclenché avant d'arrêter le chargement
        setLoading(false);
      }, 900);
    }
  }, [isConnected]);

  if (loading) {                                  // Si la page est en cours de chargement, un message d'erreur est affiché
    return <div>Chargement...</div>;
  }

  if (!isConnected) {                             // L'utilisateur n'est pas authnetifié, il sera redirigé vers la page de connexion 
    return <Navigate to="/sign-in" />;
  }

  return children;                                // Si l'utilisateur est connecté, le contenu protégé est affiché
};

export default AuthKeep;