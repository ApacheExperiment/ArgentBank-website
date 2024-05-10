// Fonction de vérification si une valeur d'entrée n'est pas vide
export const notEmpty = (value) => {
    return value.trim() !== "";
  };
  
  // Fonction de vérification si la valeur d'entrée est une adresse mail valide
  export const validEmail = (value) => {
    // Possibilité d'utiliser une expression régulière pour valider une adresse mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  };
  // Fonction de vérification si une valeur d'entrée donnée a une longueur minimale de 3 caractères
  export const minimLength = (value, minLength) => {
    return value.length >= minLength;
  };
  // Fonction de vérification si un nouveau nom d'utilisateur est différent du nom d'utilisateur actuel
  export const userNameDifferent = (newUserName, currentUserName) => {
    return newUserName !== currentUserName;
  };