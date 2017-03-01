export default {
	recipe: null,
	similarRecipes: [],
	recipeQuery: '',
	nutritionA: [{}],
	nutritionB: [{}],
	questionCounter: 0,
	questions: [
		{title: 'Calories', valueA: this.nutritionA.find((i) =>{return i.title === 'Calories';}), valueB: this.nutritionB.find((i)=>{return i.title === 'Calories';})},
		{title: 'Fat', valueA: this.nutritionA.find((i) =>{return i.title === 'Fat';}), valueB: this.nutritionB.find((i)=>{return i.title === 'Fat';})}
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
