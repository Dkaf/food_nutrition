import {GET_RANDOM_RECIPE_SUCCESS, GET_RANDOM_RECIPE_ERR, GET_SIMILAR_RECIPE_SUCCESS, GET_SIMILAR_RECIPE_ERR, RECIPE_QUERY} from '../constants/food_action_types';
import objectAssign from 'object-assign';
import initialState from './initialState';


export default function foodReducer(state = initialState, action) {
	switch (action.type) {
		case GET_RANDOM_RECIPE_SUCCESS:
			return objectAssign({}, state, {recipe: action.recipe});

		case GET_RANDOM_RECIPE_ERR:
			return alert(action.err);

		case GET_SIMILAR_RECIPE_SUCCESS:
			return objectAssign({}, state, {similarRecipes: action.recipes});

		case GET_SIMILAR_RECIPE_ERR:
			alert(action.err);
			return state;

		case RECIPE_QUERY:
			return objectAssign({}, state, {recipeQuery: action.query});

		default:
			return state;
	}
}
