import React, {PropTypes} from 'react';
import RandomRecipe from './randomRecipe';
import RecipeSearch from './recipeSearch';


class FoodApp extends React.Component {
	render() {
		return (
			<div>
				<h1>Food Nutrition</h1>
				<RandomRecipe text="get a random recipe" />
				<RecipeSearch />
			</div>
		);
	}
}

FoodApp.propTypes = {
	children: PropTypes.element
};

export default FoodApp;
