import React, {PropTypes} from 'react';

class Recipe extends React.Component {
	render() {
		return (
			<div>
				<span className="title">{this.props.title}</span>
				<span className="recipeImg"><img src={this.props.imgUrl}/></span>
				<span className="source">{this.props.source}</span>
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
