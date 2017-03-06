export default {
	recipe: null,
	recipeOptions: [],
	similarRecipes: [],
	recipeQuery: '',
	nutritionA: [{}],
	nutritionB: [{}],
	questionCounter: 0,
	score: 0,
	questions: [
		{title: 'Calories', valueA: 0, valueB: 0},
		{title: 'Fat', valueA: 0, valueB: 0},
		{title: 'Sodium', valueA: 0, valueB: 0},
		{title: 'Sugar', valueA: 0, valueB: 0}
	],
  fuelSavings: {
    newMpg: '',
    tradeMpg: '',
    newPpg: '',
    tradePpg: '',
    milesDriven: '',
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    }
  }
};
