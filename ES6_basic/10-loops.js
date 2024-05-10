export default function appendToEachArrayValue(array, appendString) {
  // Parcours de chaque élément du tableau
  for (const value of array) {
    // Ajout de la chaîne de caractères à chaque valeur
    value = appendString + value;
  }

  // Renvoi du tableau modifié
  return array;
}
