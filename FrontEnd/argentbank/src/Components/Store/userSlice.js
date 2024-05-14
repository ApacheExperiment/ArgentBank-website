import { createSlice } from "@reduxjs/toolkit";
import {  // Import des fonctions d'appel d'API
  fetchUserProfile,
  updateProfile,
  loginUser,
} from "../../Services/apiService";
import { logout } from "../../Services/authService";


//Définit le State initial du slice contenant les informations sur la connexion de l'utilisateur, le token d'authentification et le profil utilisateur 
// Pour réutiliser cette valeur dans la "slice" et dans le "reducer"
const initialState = {
  isConnected: false, // Indique si l'utilisateur est connecté
  token: null, // Token d'authentification utilisateur
  userProfile: {}, // Informations sur le profil d'utilisateur
};

// Utilisation de createSlice pour créer un slice Redux nommé "user" avec des reducers pour mettre à jour le State.
// Les reducers définissent des actions pour mettre à jour les parties spécifiques du State.
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Reducer définissant l'indicateur de connexion
    setConnectionIndicator: (state, action) => {
      state.isConnected = action.payload;
    },
    // Reducer définissant le token
    setToken: (state, action) => {
      state.token = action.payload;
    },
    // Reducer définissant le profil utilisateur
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    // Ajout d'une réinitialisation pour réinitialiser l'état de initialState 
    resetUserProfile: () => initialState,
  },
});
// Export des d'actions défini dans le slice pour les reducers
export const { setConnectionIndicator, setToken, setUserProfile, resetUserProfile } =
  userSlice.actions;

// Fonction asynchrone pour récupérer le profil utilisateur à l'aide du token dans l'API
export const fetchUserProfileAsync = (token) => {
  return async (dispatch) => {
    try {
      const userProfileData = await fetchUserProfile(token);
      const userProfile = userProfileData.body;
      dispatch(setUserProfile(userProfile));
    } catch (error) {
      if (error.message === "Token invalide") {
        // Gestion de l'erreur en mettant à jour le State de connexion
        logout(dispatch);
        console.error("Token invalide. Déconnecté.");
      } else {
        // Gestion des autres erreurs
        console.error("Erreur lors de la récupération du profil utilisateur:", error);
      }
    }
  };
};

// fonction asynchrone pour mettre à jour le nom de l'utilisateur à partir de l'API
export const updateUserNameAsync = (token, newUserName) => {
  return async (dispatch) => {
    try {
      // Appel de l'API pour mettre à jour le nom
      const updatedProfileData = await updateProfile(token, newUserName);
      const updatedProfile = updatedProfileData.body;

      // Mise à jour du profil utilisateur dans le Redux store
      dispatch(setUserProfile(updatedProfile));
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil utilisateur:", error);
    }
  };
};

// Fonction asynchrone pour la gestion d'authentification des utilisateurs et la récupération de profil
export const signInAsync = (userName, password, rememberMe) => {
  return async (dispatch) => {
    try {
      // Appel de l'API pour obtenir le token d'authentification
      const loginData = await loginUser(userName, password);
      const token = loginData.body.token;

      dispatch(setToken(token));

      if (rememberMe) {
        localStorage.setItem("token", token);
      } else {
        localStorage.removeItem("token");
      }
      // Utilisation du token pour récupérer le profil de l'utilisateur
      const userProfileData = await fetchUserProfile(token);
      const userProfile = userProfileData.body;
      dispatch(setUserProfile(userProfile));
      dispatch(setConnectionIndicator(true));
      return true; // Connexion réussie
    } catch (error) {
      // Connexion échoué
      console.error("Erreur lors de la connexion:", error);
      return { success: false, error };
    }
  };
};
export default userSlice.reducer;