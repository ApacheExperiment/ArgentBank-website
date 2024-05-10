import {
    setToken,
    setUserProfile,
    setConnectionIndicator,
    resetUserProfile,
  } from "../Components/Store/userSlice";
  import { loginUser as apiLoginUser, fetchUserProfile } from "./apiService";
  
  export const logout = (dispatch) => {                                     // Fonction pour déconnecter l'utilisateur
    localStorage.removeItem("token");                                       // Efface le token du localStorage
    dispatch(resetUserProfile());                                           // Réinitialise le profil utilisateur dans le store Redux de l'état Redux
  };
  
  export const loginUser = async (userName, password, dispatch, navigate) => {    // Fonction pour connecter l'utilisateur
    try {
      const loginData = await apiLoginUser(userName, password);              // Appel la fonction API pour connecter l'utilisateur avec le nom et le mdp
      const token = loginData.body.token;                                    // Extrait le token de la réponse
  
      dispatch(setToken(token));                                             // Met à jour le token dans le store Redux
      localStorage.setItem("token", token);                                  // Enregistre le token dans le localStorage
      dispatch(setConnectionIndicator(true));                                // Met à jour l'indicateur de connexion dans le store Redux
  
      const userProfileData = await fetchUserProfile(token);                 // Récupère le profil utilisateur à l'aide du token
      const userProfile = userProfileData.body;                              // Extrait les données du profil utiliser
      dispatch(setUserProfile(userProfile));                                 // Met à jour le profil utilisateur dans le store Redux
  
      navigate("/profile");                                                  // Redirige l'utilisateur vers la page de profil

      return "";                                                             // Renvoi une chaîne vide pour indiquer une connexion réussie
    } catch (error) {
      return "Echec de connexion. Veuillez réessayer.";                      // Gère les erreurs d'appel API, en affichant un message d'erreur
    }
  };