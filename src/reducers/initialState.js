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
	feedback: '',
	showButton: true,
	selectTextFlag: false,
	recipesLoading: false
};
