// 6-sky_high.js
import Building from './5-building.js';

// La classe SkyHighBuilding hérite de la classe Building
export default class SkyHighBuilding extends Building {
  // Le constructeur prend sqft et floors comme paramètres
  constructor(sqft, floors) {
    super(sqft); // Appel du constructeur de la classe parent avec sqft
    this._floors = floors; // Attribution de floors
  }

  // Getter pour floors
  get floors() {
    return this._floors;
  }

  // Override de la méthode evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`; // Renvoie le message d'évacuation avec le nombre d'étages
  }
}
