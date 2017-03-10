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
		let recipes = <div />;
		if (this.props.recipe != null) {
			recipes = this.props.recipe.map((i) => {
					return <Recipe key={i.id} title={i.title} imgUrl={i.image} source={i.sourceName} />;
				});
		}

		return (
			<div>
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
