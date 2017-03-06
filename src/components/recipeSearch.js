import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {getSimilarRecipe, getRecipeDetails, getRecipeOptions} from '../actions/recipe_actions';
import {recipeQuery} from '../actions/searchActions';
import Recipe from './recipe';

class RecipeSearch extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	onChange(e) {
		this.props.dispatch(recipeQuery(e.target.value));
	}

	onClick(e) {
		e.preventDefault();
		this.props.dispatch(getRecipeDetails(e.target.value));
		this.props.dispatch(getSimilarRecipe(e.target.value));
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.dispatch(getRecipeOptions(this.props.query));
	}
	render() {
		let recipeOptions = this.props.recipeOptions.map( (i) => {
			return <button key={i.id} value={i.id} onClick={this.onClick}>{i.title}</button>;
		});
		let recipeResults = this.props.similarRecipes.map( (i) => {
			return <Recipe key={i.id} title={i.title} image={i.imageUrls} />;
		});
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input id="recipeInput" placeholder="Recipe Search" onChange={this.onChange} />
					<button type="submit">Submit</button>
				</form>
				{recipeOptions}
				{recipeResults}
			</div>
		);
	}
}

RecipeSearch.propTypes = {
	query: PropTypes.string,
	onChange: PropTypes.func,
	onClick: PropTypes.func,
	onSubmit: PropTypes.func,
	dispatch: PropTypes.func,
	similarRecipes: PropTypes.array,
	recipeOptions: PropTypes.array
};

let mapStateToProps = (state) => {
	return {
		query: state.foodReducer.recipeQuery,
		similarRecipes: state.foodReducer.similarRecipes,
		recipeOptions: state.foodReducer.recipeOptions
	};
};

let Container = connect(mapStateToProps)(RecipeSearch);

export default Container;
