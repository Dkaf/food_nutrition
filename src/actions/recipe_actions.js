import * as types from '../constants/food_action_types';
import fetch from 'isomorphic-fetch';

export function getRandomRecipeSuccess(recipe) {
	return {
		type: types.GET_RANDOM_RECIPE_SUCCESS,
		recipe: recipe
	};
}

export function getRandomRecipeErr(err) {
	return {
		type: types.GET_RANDOM_RECIPE_ERR,
		err: err
	};
}

export function getRandomRecipe() {
	return (dispatch) => {
		const request = new Request('https://hidden-stream-82621.herokuapp.com/random');
		fetch(request)
		.then( (response) => {
			return response.json();
		})
		.then( (data) => {
			return dispatch(getRandomRecipeSuccess(data.body.recipes));
		})
		.catch( (err) =>{
			return dispatch(getRandomRecipeErr(err));
		});
	};
}

export function getRecipeDetailsSuccess(details) {
	return {
		type: types.GET_RECIPE_DETAILS_SUCCESS,
		details: details
	};
}

export function getRecipeDetailsErr(err) {
	return {
		type: types.GET_RECIPE_DETAILS_ERR,
		err: err
	};
}

export function getRecipeDetails(id) {
	return (dispatch) => {
		const request = new Request('https://hidden-stream-82621.herokuapp.com/recipe/' + id);
		fetch(request)
		.then( (response) => {
			return response.json();
		})
		.then( (data) => {
			return dispatch(getRecipeDetailsSuccess(data));
		})
		.catch( (err) => {
			return dispatch(getRecipeDetailsErr(err));
		});
	};
}

export function getSimilarRecipeSuccess(recipes) {
	return {
		type: types.GET_SIMILAR_RECIPE_SUCCESS,
		recipes: recipes
	};
}

export function getSimilarRecipeErr(err) {
	return {
		type: types.GET_SIMILAR_RECIPE_ERR,
		err: err
	};
}

export function getSimilarRecipe(query) {
	return (dispatch) => {
		const request = new Request('https://hidden-stream-82621.herokuapp.com/recipesearch/' + query);
		fetch(request)
		.then( (response) => {
			return response.json();
		})
		.then( (data) => {
			return dispatch(getSimilarRecipeSuccess(data));
		})
		.catch( (err) => {
			return dispatch(getSimilarRecipeErr(err));
		});
	};
}
