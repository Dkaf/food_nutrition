import React, {PropTypes} from 'react';
import RandomRecipe from './randomRecipe';


class FoodApp extends React.Component {
	render() {
		return (
			<div>
				<h1>Food Nutrition</h1>
				<RandomRecipe text="get a random recipe" />
			</div>
		);
	}
}

FoodApp.propTypes = {
	children: PropTypes.element
};

export default FoodApp;
