import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {getSimilarRecipe, getRecipeDetails} from '../actions/recipe_actions';
import {buttonDisplay, selectText, recipesLoading} from '../actions/searchActions';
import Recipe from './recipe';
import LoadingIcon from './loadingIcon';

class SearchResults extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(e) {
		e.preventDefault();
		this.props.dispatch(getRecipeDetails(e.target.value));
		this.props.dispatch(getSimilarRecipe(e.target.value));
		this.props.dispatch(buttonDisplay(false));
		this.props.dispatch(selectText(false));
		this.props.dispatch(recipesLoading(true));
	}


	render() {
		let recipeOptions = this.props.recipeOptions.map( (i) => {
			return <button className="recipeOptions" key={i.id} value={i.id} onClick={this.onClick}>{i.title}</button>;
		});
		let recipeResults = this.props.similarRecipes.map( (i) => {
			if (i.healthScore > this.props.originalRecipeDetails.healthScore ) {
				return <Recipe className="recipeResults" key={i.id} title={i.title} imgUrl={i.imgUrl} source={i.source} sourceUrl={i.sourceUrl} />;
			}
		});
		return (
			<div id="searchResults">
				{this.props.selectTextFlag?<span className="searchOptionText">Which is closest to your recipe?</span>:''}

				{this.props.showButton?recipeOptions:''}
				{recipeResults}
				{this.props.recipesLoading?<LoadingIcon />:''}
			</div>
		);
	}
}

SearchResults.propTypes = {
	query: PropTypes.string,
	onClick: PropTypes.func,
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

let Container = connect(mapStateToProps)(SearchResults);

export default Container;
