import * as types from '../constants/food_action_types';

export function recipeQuery(query) {
	return {
		type: types.RECIPE_QUERY,
		query: query
	};
}

export function buttonDisplay(showButton, clickedId) {
	return {
		type: types.BUTTON_DISPLAY,
		showButton: showButton,
		clickedId: clickedId
	};
}

export function selectText(flag) {
	return {
		type: types.SELECT_TEXT,
		flag: flag
	};
}

export function recipesLoading(flag) {
	return {
		type: types.RECIPES_LOADING,
		flag: flag
	};
}
