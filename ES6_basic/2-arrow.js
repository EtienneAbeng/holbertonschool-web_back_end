/* Fonction getNeighborhoodsList : initialise la liste des quartiers de San Francisco */
export default function getNeighborhoodsList() {
  // Initialise la liste des quartiers de San Francisco
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  // Sauvegarde de la référence à 'this'
  const self = this;

  // Ajoute un quartier à la liste
  this.addNeighborhood = (newNeighborhood) => {
    // Ajoute le nouveau quartier à la liste
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    // Retourne la liste mise à jour des quartiers
    return self.sanFranciscoNeighborhoods;
  };
}
