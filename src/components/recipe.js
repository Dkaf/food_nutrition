import React, {PropTypes} from 'react';

class Recipe extends React.Component {
	render() {
		return (
			<div className="recipeDiv">
				<span className="recipeTitle">{this.props.title}</span>
				<span className="recipeImgSpan"><img className="recipeImg" src={this.props.imgUrl}/></span>
				<span className="recipeSource">{this.props.source}</span>
			</div>
		);
	}
}

Recipe.propTypes = {
	children: PropTypes.element,
	title: PropTypes.string.isRequired,
	imgUrl: PropTypes.string,
	source: PropTypes.string
};

export default Recipe;
