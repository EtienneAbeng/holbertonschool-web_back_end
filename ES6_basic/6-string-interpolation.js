export default function getSanFranciscoDescription() {
  // Définition des variables
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  /* Utilisation d'un littéral de modèle pour construire la chaîne de
      caractères avec les variables insérées dynamiquement */
  return `As of ${year}, it was the seventh-highest income county in the United States, 
      with a per capita personal income of ${budget.income}. As of 2015, 
      San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}
