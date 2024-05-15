class HolbertonCourse {
  // Constructeur de la classe HolbertonCourse
  constructor(name, length, students) {
    // Initialise les attributs de la classe
    this._name = name; // Nom du cours
    this._length = length; // Durée du cours
    this._students = students; // Liste des étudiants inscrits
  }

  // Getter pour l'attribut name
  get name() {
    return this._name; // Renvoie le nom du cours
  }

  // Setter pour l'attribut name
  set name(newName) {
    // Vérifie que le nouveau nom est une chaîne de caractères
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string'); // Lance une erreur si ce n'est pas le cas
    }
    this._name = newName; // Met à jour le nom du cours
  }

  // Getter pour l'attribut length
  get length() {
    return this._length; // Renvoie la durée du cours
  }

  // Setter pour l'attribut length
  set length(newLength) {
    // Vérifie que la nouvelle durée est un nombre
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number'); // Lance une erreur si ce n'est pas le cas
    }
    this._length = newLength; // Met à jour la durée du cours
  }

  // Getter pour l'attribut students
  get students() {
    return this._students; // Renvoie la liste des étudiants inscrits au cours
  }

  // Setter pour l'attribut students
  set students(newStudents) {
    // Vérifie que la nouvelle liste d'étudiants est un tableau
    if (!Array.isArray(newStudents)) {
      throw new TypeError('Students must be an array'); // Lance une erreur si ce n'est pas le cas
    }
    this._students = newStudents; // Met à jour la liste des étudiants inscrits au cours
  }
}

export default HolbertonCourse;
