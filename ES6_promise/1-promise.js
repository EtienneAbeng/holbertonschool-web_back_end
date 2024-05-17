// Définir la fonction getFullResponseFromAPI
function getFullResponseFromAPI(success) {
  // Retourner une nouvelle promesse
  return new Promise((resolve, reject) => {
    // Vérifier si success est true
    if (success) {
      // Si c'est le cas, résoudre la promesse avec un objet contenant le statut et le corps
      resolve({ status: 200, body: 'Success' });
    } else {
      // Sinon, rejeter la promesse avec un message d'erreur approprié
      reject(new Error('The fake API is not working currently'));
    }
  });
}

// Exporter la fonction getFullResponseFromAPI
export default getFullResponseFromAPI;
