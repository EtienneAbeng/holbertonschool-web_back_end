// 5-building.js

// Définition de la classe Building
export default class Building {
  // Constructeur avec l'attribut sqft
  constructor(sqft) {
    this._sqft = sqft; // Version de l'attribut avec un tiret bas
  }

  // Getter pour l'attribut sqft
  get sqft() {
    return this._sqft;
  }

  // Méthode abstraite devant être implémentée par les sous-classes
  evacuationWarningMessage() {
    throw new Error(
      'La classe étendant Building doit remplacer evacuationWarningMessage',
    );
  }
}
