// Définir la fonction signUpUser
export default function signUpUser(firstName, lastName) {
  // Retourner une nouvelle promesse
  return new Promise((resolve) => {
    // Résoudre la promesse avec un objet contenant le prénom et le nom de famille
    resolve({
      firstName,
      lastName,
    });
  });
}
