// 5-building.js
export default class Building {
  // Constructor with sqft attribute
  constructor(sqft) {
    this._sqft = sqft; // Underscore attribute version
  }

  // Getter for sqft attribute
  get sqft() {
    return this._sqft;
  }

  // Abstract method that should be implemented by subclasses
  evacuationWarningMessage() {
    throw new Error(
      'Class extending Building must override evacuationWarningMessage',
    );
  }
}
