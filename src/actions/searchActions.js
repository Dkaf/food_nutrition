import * as types from '../constants/food_action_types';

export function recipeQuery(query) {
	return {
		type: types.RECIPE_QUERY,
		query: query
	};
}
