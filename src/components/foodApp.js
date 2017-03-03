import React, {PropTypes} from 'react';
import RandomRecipe from './randomRecipe';
import RecipeSearch from './recipeSearch';
import QuizForm from './quizForm';


class FoodApp extends React.Component {
	constructor(props) {
		super(props);
	}

	onClick() {
		return (
			<QuizForm />
		);
	}


	render() {
		return (
			<div>
				<h1>Food Nutrition</h1>
				<RandomRecipe text="get a random recipe" />
				<RecipeSearch />
				<QuizForm />
			</div>
		);
	}
}

FoodApp.propTypes = {
	children: PropTypes.element
};

export default FoodApp;
