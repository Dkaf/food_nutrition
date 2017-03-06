import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import RandomRecipe from './randomRecipe';
import RecipeSearch from './recipeSearch';


class FoodApp extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div>
				<h1>Food Nutrition</h1>
				<RecipeSearch />
				{this.props.children}
			</div>
		);
	}
}

FoodApp.propTypes = {
	children: PropTypes.element
};

export default FoodApp;
