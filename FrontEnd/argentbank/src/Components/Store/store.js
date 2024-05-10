import { configureStore } from "@reduxjs/toolkit"; // Importation de la fonction configureStore pour configurer le store Redux
import userReducer from "./userSlice"; // Importation du reducer userReducer qui gère l'état de l'utilisateur dans le store Redux

const store = configureStore({  // Configuration du store Redux
  reducer: userReducer,         // Gère l'état de l'utilisateur
  devTools: true,               // Activation des outils de développement Redux dans le navigateur
});

export default store;


