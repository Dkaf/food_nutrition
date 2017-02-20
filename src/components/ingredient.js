import React, {PropTypes} from 'react';

class Ingredient extends React.Component {
	render() {
		return (
			<div>
				<span className="ingredientName">{this.props.name}</span>
				<span className="amount">{this.props.amount}</span>
				<span className="originalString">{this.props.originalString}</span>
			</div>
		);
	}
}

Ingredient.propTypes = {
	children: PropTypes.element,
	name: PropTypes.string,
	amount: PropTypes.string,
	originalString: PropTypes.string
};

export default Ingredient;
