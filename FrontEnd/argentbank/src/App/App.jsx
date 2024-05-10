import React, { useEffect } from 'react'
import Router from '../Router/Router'; //Import du composant Router poru lancer l'application
import { useDispatch } from 'react-redux'; //Import du hook useDispatch pour envoyer des information au store

import { //Import des actions Redux pour gérer l'authentification et le profil des utilisateurs
  setToken,
  setConnectionIndicator,
  fetchUserProfileAsync,
} from "../Components/Store/userSlice";


function App() {
  const dispatch = useDispatch(); // Initialisation le disptach Redux   
  const storageToken = localStorage.getItem("token"); //Récupération du token utilisateur pour exécuter le code après le montage des composants

  //Utilisation du hook useEffect pour exécuter le code après le montage des composants
  useEffect(() => {
    if (storageToken) { //Si un token est trouvé dans localStorage
                        //les actions Redux sont envoyé pour mettre à jour le token, l'indicateur de connexion et le profil utilisateur
      dispatch(setToken(storageToken)); 
      dispatch(setConnectionIndicator(true));
      dispatch(fetchUserProfileAsync(storageToken));
    }
  }, [dispatch, storageToken]);
  return (
    <Router />
  )
}

export default App;
