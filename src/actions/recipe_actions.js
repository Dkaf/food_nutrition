import * as types from '../constants/food_action_types';
import fetch from 'isomorphic-fetch';

export function getRandomRecipeSuccess(recipe, newQuestions) {
	return {
		type: types.GET_RANDOM_RECIPE_SUCCESS,
		recipe: recipe,
		newQuestions: newQuestions
	};
}

export function getRandomRecipeErr(err) {
	return {
		type: types.GET_RANDOM_RECIPE_ERR,
		err: err
	};
}

export function getRandomRecipe(questions) {
	return (dispatch) => {
		const request = new Request('https://hidden-stream-82621.herokuapp.com/random');
		fetch(request)
		.then( (response) => {
			return response.json();
		})
		.then( (data) => {
			let newQuestions = questions.map( (i) => {
				let findVal = (values) => {
					return values.title === i.title;
				};
				let valA = data[0].recipeNutrition.body.find(findVal);
				let valB = data[1].recipeNutrition.body.find(findVal);
				return {
					title: i.title,
					valueA: valA?valA.amount:0,
					valueB: valB?valB.amount:0
				};
			});
			return dispatch(getRandomRecipeSuccess(data, newQuestions));
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

export function getRecipeOptionsSuccess(recipe) {
	return {
		type: types.GET_RECIPE_OPTIONS_SUCCESS,
		recipe: recipe
	};
}

export function getRecipeOptionsErr(err) {
	return {
		type: types.GET_RECIPE_OPTIONS_ERR,
		err: err
	};
}

export function getRecipeOptions(query) {
	return (dispatch) => {
		const request = new Request('https://hidden-stream-82621.herokuapp.com/recipesearch/' + query);
		fetch(request)
		.then( (response) => {
			return response.json();
		})
		.then( (data) => {
			return dispatch(getRecipeOptionsSuccess(data.body));
		})
		.catch( (err) => {
			return dispatch(getRecipeOptionsErr(err));
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

export function getSimilarRecipe(recipe) {
	return (dispatch) => {
		const request = new Request('https://hidden-stream-82621.herokuapp.com/similarRecipes/' + recipe);
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
