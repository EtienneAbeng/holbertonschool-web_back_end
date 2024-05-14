// Importe la classe ClassRoom depuis le fichier './0-classroom.js'
import ClassRoom from './0-classroom.js';

// Définit une fonction pour initialiser les salles de classe
function initializeRooms() {
  // Crée un tableau de salles de classe avec des tailles spécifiques
  const rooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];

  // Retourne le tableau de salles de classe initialisées
  return rooms;
}

// Exporte la fonction initializeRooms comme fonction par défaut
export default initializeRooms;
