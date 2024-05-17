// Importer les fonctions signUpUser et uploadPhoto
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Définir la fonction handleProfileSignup
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Appeler les fonctions signUpUser et uploadPhoto avec les arguments spécifiés
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  // Attendre que les deux promesses soient résolues ou rejetées
  return Promise.allSettled([userPromise, photoPromise]).then((results) =>
    // Créer un tableau contenant les résultats des promesses
    results.map((result) =>
      // Pour chaque résultat, retourner un objet avec le statut et la valeur ou l'erreur
      ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason,
      })));
}
