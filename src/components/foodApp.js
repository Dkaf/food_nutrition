import React, {PropTypes} from 'react';
import RecipeSearch from './recipeSearch';


class FoodApp extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div id="mainAppDiv">
				<h1 id="mainTitle">Food Nutrition</h1>
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
