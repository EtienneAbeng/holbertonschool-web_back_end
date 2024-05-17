// Importer les fonctions uploadPhoto et createUser depuis './utils'
import { uploadPhoto, createUser } from './utils';

// Définir la fonction handleProfileSignup
export default function handleProfileSignup() {
  // Appeler la fonction uploadPhoto pour télécharger une photo
  const photo = uploadPhoto();
  // Appeler la fonction createUser pour créer un utilisateur
  const user = createUser();

  // Utiliser Promise.all pour exécuter les deux promesses en parallèle
  return Promise.all([photo, user])
    .then((res) => {
      // Gérer la résolution de la promesse
      console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`); // Afficher les informations de l'utilisateur
    })
    .catch(() => {
      // Gérer le rejet de la promesse
      console.log('Signup system offline'); // Afficher un message lorsque le système de création de compte est hors ligne
    });
}
