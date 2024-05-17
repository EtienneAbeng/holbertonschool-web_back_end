// Définir la fonction handleResponseFromAPI
function handleResponseFromAPI(promise) {
  // Ajouter des gestionnaires à la promesse
  promise
    .then(() => {
      // Gestionnaire pour la résolution de la promesse
      console.log('Got a response from the API'); // Journaliser dans la console
      return { status: 200, body: 'success' }; // Retourner l'objet avec le statut et le corps
    })
    .catch(() =>
    // Gestionnaire pour le rejet de la promesse
      new Error(), // Retourner un objet Error vide
    )
    .finally(() => {
      // Gestionnaire pour chaque résolution de la promesse
      console.log('Got a response from the API'); // Journaliser dans la console
    });
}

// Exporter la fonction handleResponseFromAPI
export default handleResponseFromAPI;
