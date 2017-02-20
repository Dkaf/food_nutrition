import {GET_RANDOM_RECIPE_SUCCESS, GET_RANDOM_RECIPE_ERR} from '../constants/food_action_types';
import objectAssign from 'object-assign';
import initialState from './initialState';


export default function foodReducer(state = initialState, action) {
	switch (action.type) {
		case GET_RANDOM_RECIPE_SUCCESS:
			return objectAssign({}, state, {recipe: action.recipe});

		case GET_RANDOM_RECIPE_ERR:
			return alert(action.err);

		default:
			return state;
	}
}
