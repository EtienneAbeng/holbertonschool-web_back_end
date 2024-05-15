export default class HolbertonClass {
  // Classe représentant une classe Holberton
  constructor(size, location) {
    // Constructeur avec les attributs size et location
    this._size = size; // Attribut privé pour la taille
    this._location = location; // Attribut privé pour l'emplacement
  }

  valueOf() {
    return this._size;
  } // Méthode valueOf redéfinie pour retourner la taille

  toString() {
    return this._location;
  } // Méthode toString redéfinie pour retourner l'emplacement
}
