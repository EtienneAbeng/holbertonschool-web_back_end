// Définir la fonction divideFunction
export default function divideFunction(numerator, denominator) {
    // Vérifier si le dénominateur est égal à zéro
    if (denominator === 0) {
      // Si c'est le cas, lancer une erreur avec un message approprié
      throw Error('cannot divide by 0');
    }
    // Effectuer la division et retourner le résultat
    return numerator / denominator;
  }
  