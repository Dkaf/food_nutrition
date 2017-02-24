import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {getSimilarRecipe} from '../actions/recipe_actions';
import {recipeQuery} from '../actions/searchActions';
import Recipe from './recipe';

class RecipeSearch extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.props.dispatch(recipeQuery(e.target.value));
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.dispatch(getSimilarRecipe(this.props.query));
	}
	render() {
		let recipeResults = this.props.similarRecipes.map( (i) => {
			return <Recipe key={i} title={i.title} />;
		});
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input id="recipeInput" placeholder="Recipe Search" onChange={this.onChange} />
					<button type="submit">Submit</button>
				</form>
				{recipeResults}
			</div>
		);
	}
}

RecipeSearch.propTypes = {
	query: PropTypes.string,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func,
	dispatch: PropTypes.func,
	similarRecipes: PropTypes.array
};

let mapStateToProps = (state) => {
	return {
		query: state.foodReducer.recipeQuery,
		similarRecipes: state.foodReducer.similarRecipes
	};
};

let Container = connect(mapStateToProps)(RecipeSearch);

export default Container;
