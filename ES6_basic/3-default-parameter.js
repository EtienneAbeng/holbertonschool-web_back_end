/* Fonction getSumOfHoods : calcule la somme des quartiers */
export default function getSumOfHoods(
  initialNumber,
  expansion1989 = 89, // Valeur par défaut pour l'expansion en 1989
  expansion2019 = 19, // Valeur par défaut pour l'expansion en 2019
) {
  /* Retourne la somme des quartiers */
  return initialNumber + expansion1989 + expansion2019;
}
