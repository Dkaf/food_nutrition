import * as types from '../constants/food_action_types';

export function recipeQuery(query) {
	return {
		type: types.RECIPE_QUERY,
		query: query
	};
}

export function buttonDisplay(showButton) {
	return {
		type: types.BUTTON_DISPLAY,
		showButton: showButton
	};
}

export function selectText(flag) {
	return {
		type: types.SELECT_TEXT,
		flag: flag
	};
}
