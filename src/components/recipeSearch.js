import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {getRecipeOptions} from '../actions/recipe_actions';
import {recipeQuery, buttonDisplay, selectText, recipesLoading} from '../actions/searchActions';


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
		this.props.dispatch(getRecipeOptions(this.props.query));
		this.props.dispatch(buttonDisplay(true));
		this.props.dispatch(selectText(true));
		this.props.dispatch(recipesLoading(true));
		browserHistory.push('/search');
	}
	render() {
		return (
			<div id="recipeSearchDiv">
				<form onSubmit={this.onSubmit}>
					<input id="recipeInput" placeholder="Recipe Search" onChange={this.onChange} />
					<button id="recipeSubmit" type="submit"><i className="fa fa-search" aria-hidden="true" /></button>
				</form>
			</div>
		);
	}
}

//loading flag

RecipeSearch.propTypes = {
	query: PropTypes.string,
	onChange: PropTypes.func,
	onClick: PropTypes.func,
	onSubmit: PropTypes.func,
	dispatch: PropTypes.func,
	similarRecipes: PropTypes.array,
	recipeOptions: PropTypes.array,
	originalRecipeDetails: PropTypes.obj,
	showButton: PropTypes.boolean,
	selectTextFlag: PropTypes.boolean,
	recipesLoading: PropTypes.loading
};

let mapStateToProps = (state) => {
	return {
		query: state.foodReducer.recipeQuery,
		similarRecipes: state.foodReducer.similarRecipes,
		recipeOptions: state.foodReducer.recipeOptions,
		originalRecipeDetails: state.foodReducer.originalRecipeDetails,
		showButton: state.foodReducer.showButton,
		selectTextFlag: state.foodReducer.selectTextFlag,
		recipesLoading: state.foodReducer.recipesLoading
	};
};

let Container = connect(mapStateToProps)(RecipeSearch);

export default Container;
