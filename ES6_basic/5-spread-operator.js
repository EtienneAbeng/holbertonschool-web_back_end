/* Fonction concatArrays : prend array1, array2 et string en entrée */

export default function concatArrays(array1, array2, string) {
  /* Utilise la syntaxe de diffusion pour concaténer les éléments et créer un
    nouveau tableau */
  return [...array1, ...array2, ...string];
}
