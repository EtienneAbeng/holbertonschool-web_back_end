/* Fonction taskFirst : retourne une chaîne de caractères */
export function taskFirst() {
  // Définit une constante task avec la valeur 'I prefer const when I can.'
  const task = 'I prefer const when I can.';
  // Retourne la constante task
  return task;
}

/* Fonction getLast : retourne une chaîne de caractères */
export function getLast() {
  // Retourne la chaîne de caractères ' is okay'
  return ' is okay';
}

/* Fonction taskNext : retourne une combinaison de chaînes de caractères */
export function taskNext() {
  // Initialise la variable combination avec la valeur 'But sometimes let'
  let combination = 'But sometimes let';
  // Ajoute la valeur retournée par la fonction getLast à la variable combination
  combination += getLast();
  // Retourne la variable combination
  return combination;
}
