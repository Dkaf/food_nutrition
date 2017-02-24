import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {getRandomRecipe} from '../actions/recipe_actions';
import Recipe from './recipe';

class RandomRecipe extends React.Component {
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(e) {
		e.preventDefault();
		this.props.dispatch(getRandomRecipe());
	}

	render() {
		let recipes = this.props.recipe.map((i) => {
			let recipe = i.map((j) => {
				return <Recipe key={i} title={j.title} imgUrl={j.image} source={j.sourceName} />;
			});
			return recipe;
		});

		return (
			<div>
				<button onClick={this.onClick}>{this.props.text}</button>
				{recipes}
			</div>
		);
	}
}

RandomRecipe.propTypes = {
	children: PropTypes.element,
	onClick: PropTypes.func,
	text: PropTypes.string.isRequired,
	recipe: PropTypes.array,
	dispatch: PropTypes.func
};

let mapStateToProps = (state) => {
	return {
		recipe: state.foodReducer.recipe
	};
};

let Container = connect(mapStateToProps)(RandomRecipe);

export default Container;
