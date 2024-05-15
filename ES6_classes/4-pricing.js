import Currency from './3-currency.js'; // Importe la classe Currency

export default class Pricing { // Déclare une classe Pricing
  constructor(amount, currency) { // Définit le constructeur
    this._amount = amount; // Initialise _amount
    this._currency = currency; // Initialise _currency
  }

  get amount() { return this._amount; } // Getter pour _amount

  set amount(amount) { // Setter pour _amount
    if (typeof amount !== 'number') { // Vérifie le type
      throw new TypeError('Amount must be a number'); // Erreur si le type est incorrect
    }
    this._amount = amount; // Affecte la valeur
  }

  get currency() { return this._currency; } // Getter pour _currency

  set currency(currency) { // Setter pour _currency
    if (!(currency instanceof Currency)) { // Vérifie l'instance
      throw new TypeError('Currency must be a Currency'); // Erreur si l'instance est incorrecte
    }
    this._currency = currency; // Affecte la valeur
  }

  displayFullPrice() { // Méthode pour afficher le prix complet
    return `${this._amount} ${this._currency.name} (${this._currency.code})`; // Formatage du prix
  }

  static convertPrice(amount, conversionRate) { // Méthode statique pour convertir le prix
    return amount * conversionRate; // Calcul de la conversion
  }
}
