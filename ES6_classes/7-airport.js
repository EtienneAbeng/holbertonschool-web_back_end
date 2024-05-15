export default class Airport {
  // Classe représentant un aéroport
  constructor(name, code) {
    // Constructeur avec les attributs name et code
    this._name = name; // Attribut privé pour le nom de l'aéroport
    this._code = code; // Attribut privé pour le code de l'aéroport
  }

  get name() {
    return this._name;
  } // Getter pour le nom de l'aéroport

  get code() {
    return this._code;
  } // Getter pour le code de l'aéroport

  toString() {
    return `[object ${this._code}]`;
  } // Méthode toString redéfinie pour retourner le code de l'aéroport
}
