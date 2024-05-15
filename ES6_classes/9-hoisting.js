// Définition de la classe HolbertonClass
export class HolbertonClass {
  // Constructeur pour initialiser les attributs year et location
  constructor(year, location) {
    this._year = year; // Attribut pour l'année
    this._location = location; // Attribut pour la localisation
  }

  // Getter pour l'année
  get year() {
    return this._year;
  }

  // Getter pour la localisation
  get location() {
    return this._location;
  }
}

// Crée deux instances de la classe HolbertonClass pour les années 2019 et 2020, à San Francisco
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Définition de la classe StudentHolberton
export class StudentHolberton {
  // Constructeur pour initialiser les attributs firstName, lastName et holbertonClass
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName; // Attribut pour le prénom
    this._lastName = lastName; // Attribut pour le nom de famille
    this._holbertonClass = holbertonClass; // Attribut pour la classe Holberton
  }

  // Getter pour le nom complet de l'étudiant
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Getter pour la classe Holberton de l'étudiant
  get holbertonClass() {
    return this._holbertonClass;
  }
}

// Crée cinq instances de la classe StudentHolberton pour différents étudiants
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Crée un tableau contenant les instances des étudiants
const listOfStudents = [student1, student2, student3, student4, student5];

// Exporte le tableau contenant les instances des étudiants
export default listOfStudents;
