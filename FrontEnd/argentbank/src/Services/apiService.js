// Obtentions de l'URL de l'API à partir des variables d'environnement
const API_URL =
  process.env.REACT_APP_API_PATH || "http://localhost:3001/api/v1"; 

// Fonction asynchrone pour faire une requête POST (connexion utilisateur) au endpoint de connexion
export const loginUser = async (email, password) => {
  const requestUrl = `${API_URL}/user/login`;                   // URL de la requête
  const requestHeaders = {
    "Content-Type": "application/json",                         // En tête de la requête
  };
  const requestBody = JSON.stringify({                          // Corps de la requête
    email,
    password,
  });

  try {
    const response = await fetch(requestUrl, {                  // Envoi de la requête
      method: "POST",
      body: requestBody,
      headers: requestHeaders,
    });

    if (response.ok) {                                          // Si la réponse est valide
      const data = await response.json();                       // Extraction des données de la réponse
      return data;
    } else {
      throw new Error("Echec de connexion");                    // Si non une erreur est indiqué
    }
  } catch (error) { 
    if (error.message === "Echec de récupération") {            // En cas d'erreur réseau
      throw Error("Une erreur réseau s'est produite, veuillez réessayer plus tard");
    }
    throw error;                                                // Lancement de l'erreur
  }
};

// Fonction asynchrone pour récupérer le profil utilisateur après la connexion
export const fetchUserProfile = async (token) => {
  const requestUrl = `${API_URL}/user/profile`;                 // URL de la requête
  const requestHeaders = {                                      // En tête de le requête
    Accept: "*/*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  
  try {
    const response = await fetch(requestUrl, {                // Envoi de la requête
      method: "POST",
      headers: requestHeaders,
    });

    if (response.ok) {                                        // Si la réponse est valide
      const data = await response.json();                     // Extraction des données de la réponse
      return data;
    }
    if (response.status === 401) {                            // Si non authorisé
      const errorData = await response.json();
      throw new Error(errorData.message);                     // Un message d'erreur est envoyé
    } else {
      console.log(response);
      throw new Error("Échec de la récupération du profil utilisateur");
    }
  } catch (error) {                                           // Gestion des erreurs
    throw error;                                              // Lance l'erreur
  }
};

// Fonction asynchrone pour mettre à jour le nom d'utilisateur
export const updateProfile = async (token, newUserName) => {
  const requestUrl = `${API_URL}/user/profile`;               // URL de la requête
  const requestHeaders = {                                    // En tête de la requête
    Accept: "*/*",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const requestBody = JSON.stringify({                        // Corps de la requête
    userName: newUserName,
  });

  
  try {
    const response = await fetch(requestUrl, {
      method: "PUT",
      headers: requestHeaders,
      body: requestBody,
    });

    if (response.ok) {                                       // Si la réponse est valide
      const data = await response.json();                    // Extraction des données de la réponse
      const userProfile = data.body;
      console.log(userProfile);                              // Affiche le profil utilisateur mis à jour
      return data;
    } else {                                                // En cas de d'autres erreurs
      throw new Error("Échec de la mise à jour du nom d'utilisateur"); // Lancement d'une erreur
    }
  } catch (error) {                                         // Gestion des erreurs
    throw error;                                            // Lance l'erreur
  }
};