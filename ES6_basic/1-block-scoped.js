/* Fonction taskBlock : retourne un tableau contenant deux tâches */
export default function taskBlock(trueOrFalse) {
  // Initialise les variables de tâches
  let task = false; // Tâche 1, initialement fausse
  let task2 = true; // Tâche 2, initialement vraie

  // Vérifie la condition trueOrFalse
  if (trueOrFalse) {
    // Si trueOrFalse est vrai, met à jour les variables de tâches
    task = false;
    task2 = true;
  }

  // Retourne un tableau contenant les valeurs des tâches
  return [task, task2];
}
