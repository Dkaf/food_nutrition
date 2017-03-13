import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {getSimilarRecipe, getRecipeDetails, getRecipeOptions} from '../actions/recipe_actions';
import {recipeQuery, buttonDisplay, selectText} from '../actions/searchActions';
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
		this.props.dispatch(buttonDisplay(false));
		this.props.dispatch(selectText(false));
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.dispatch(getRecipeOptions(this.props.query));
		this.props.dispatch(buttonDisplay(true));
		this.props.dispatch(selectText(true));
	}
	render() {
		let recipeOptions = this.props.recipeOptions.map( (i) => {
			return <button className="recipeOptions" key={i.id} value={i.id} onClick={this.onClick}>{i.title}</button>;
		});
		let recipeResults = this.props.similarRecipes.map( (i) => {
			if (i.healthScore > this.props.originalRecipeDetails.healthScore ) {
				return <Recipe className="recipeResults" key={i.id} title={i.title} />;
			}
		});
		return (
			<div id="recipeSearchDiv">
				<form onSubmit={this.onSubmit}>
					<input id="recipeInput" placeholder="Recipe Search" onChange={this.onChange} />
					<button id="recipeSubmit" type="submit"><i className="fa fa-search" aria-hidden="true" /></button>
				</form>
				{this.props.selectTextFlag?<span className="searchOptionText">Which is closest to your recipe?</span>:''}
				{this.props.showButton?recipeOptions:''}
				{this.props.similarRecipes?recipeResults:<i className="fa fa-spinner fa-pulse fa-3x fa-fw" />}
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
	recipeOptions: PropTypes.array,
	originalRecipeDetails: PropTypes.obj,
	showButton: PropTypes.boolean,
	selectTextFlag: PropTypes.boolean
};

let mapStateToProps = (state) => {
	return {
		query: state.foodReducer.recipeQuery,
		similarRecipes: state.foodReducer.similarRecipes,
		recipeOptions: state.foodReducer.recipeOptions,
		originalRecipeDetails: state.foodReducer.originalRecipeDetails,
		showButton: state.foodReducer.showButton,
		selectTextFlag: state.foodReducer.selectTextFlag
	};
};

let Container = connect(mapStateToProps)(RecipeSearch);

export default Container;
