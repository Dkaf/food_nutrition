import * as types from '../constants/food_action_types';
import objectAssign from 'object-assign';
import initialState from './initialState';


export default function foodReducer(state = initialState, action) {
	switch (action.type) {
		case types.GET_RANDOM_RECIPE_SUCCESS:
			return objectAssign({}, state, {recipe: action.recipe,
											nutritionA: action.recipe[0].recipeNutrition.body,
											nutritionB: action.recipe[1].recipeNutrition.body,
											questions: action.newQuestions});

		case types.GET_RANDOM_RECIPE_ERR:
			alert(action.err);
			return state;

		case types.GET_RECIPE_OPTIONS_SUCCESS:
			return objectAssign({}, state, {recipeOptions: action.recipe, similarRecipes: null});

		case types.GET_RECIPE_OPTIONS_ERR:
			alert(action.err);
			return state;

		case types.GET_SIMILAR_RECIPE_SUCCESS:
			return objectAssign({}, state, {similarRecipes: action.recipes});

		case types.GET_SIMILAR_RECIPE_ERR:
			alert(action.err);
			return state;

		case types.RECIPE_QUERY:
			return objectAssign({}, state, {recipeQuery: action.query});

		case types.BUTTON_DISPLAY:
			return objectAssign({}, state, {showButton: action.showButton});

		case types.SELECT_TEXT:
			return objectAssign({}, state, {selectTextFlag: action.flag})

		case types.GET_RECIPE_DETAILS_SUCCESS:
			return objectAssign({}, state, {originalRecipeDetails: action.details});

		case types.GET_RECIPE_DETAILS_ERR:
			alert(action.err);
			return state;

		case types.ADD_SCORE:
			return objectAssign({}, state, {score: state.score + action.score, feedback:'Correct!'});

		case types.INCORRECT:
			return objectAssign({}, state, {feedback: 'Sorry, that is incorrect'});

		case types.NEXT_QUESTION:
			return objectAssign({}, state, {questionCounter: state.questionCounter + action.question});

		case types.QUIZ_RESET:
			return objectAssign({}, state, {questionCounter: action.question, score: action.score});

		default:
			return state;
	}
}
