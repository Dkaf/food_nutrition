import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {getSimilarRecipe} from '../actions/recipe_actions';
import {recipeQuery} from '../actions/searchActions';

class RecipeSearch extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		e.preventDefault();
		this.dispatch(recipeQuery(e.target.value));
	}

	onSubmit(e) {
		e.preventDefault();
		this.dispatch(getSimilarRecipe(this.props.query));
	}
	render() {
		return (
			<div>
				<form omSubmit={this.onSubmit}>
					<input id="recipeInput" placeholder="Recipe Search" />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

RecipeSearch.proptypes = {
	query: PropTypes.string
};

let mapStateToProps = (state) => {
	return {
		query: state.foodReducer.query,
		similarRecipes: state.foodReducer.similarRecipes
	};
};

let container = connect(mapStateToProps)(RecipeSearch);

export default container;
