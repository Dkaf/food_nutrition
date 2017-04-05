import React, {PropTypes} from 'react';

class Recipe extends React.Component {
	render() {
		return (
			<div className="recipeDiv" title={this.props.title}>
				<a href={this.props.sourceUrl}>
					<div className="container">
						<img className="recipeImg" src={this.props.imgUrl}/>
						<span className="recipeTitle">{this.props.title.length > 30?this.props.title.substr(0, 30) + '...':this.props.title}</span>
						<span className="recipeSource">{this.props.source}</span>
					</div>
				</a>
			</div>
		);
	}
}

Recipe.propTypes = {
	children: PropTypes.element,
	title: PropTypes.string.isRequired,
	imgUrl: PropTypes.string,
	sourceUrl: PropTypes.string,
	source: PropTypes.string
};

export default Recipe;
