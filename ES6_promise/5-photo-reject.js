// Définir la fonction uploadPhoto
export default function uploadPhoto(filename) {
  // Rejeter la promesse avec un objet Error contenant un message approprié
  return Promise.reject(Error(`${filename} cannot be processed`));
}
