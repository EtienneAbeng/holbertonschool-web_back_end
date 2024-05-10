import getBudgetObject from "./7-getBudgetObject";

export default function getFullBudgetObject(income, gdp, capita) {
  // Obtenir l'objet budget
  const budget = getBudgetObject(income, gdp, capita);

  // Créer l'objet budget complet avec des méthodes
  const fullBudget = {
    ...budget,
    // Méthode pour obtenir le revenu en dollars
    getIncomeInDollars: (income) => `$${income}`,
    // Méthode pour obtenir le revenu en euros
    getIncomeInEuros: (income) => `${income} euros`,
  };

  // Renvoyer l'objet budget complet
  return fullBudget;
}
