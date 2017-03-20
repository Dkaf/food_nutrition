import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {getRandomRecipe} from '../actions/recipe_actions';


class QuizForm extends React.Component {
	constructor(props) {
		super(props);

	}

	componentWillMount() {
		this.props.dispatch(getRandomRecipe(this.props.questions));
	}



	render() {
		return (
			<div id="quizDiv">
				{this.props.children}
			</div>
		);
	}
}


QuizForm.propTypes = {
	children: PropTypes.element,
};

let Container = connect()(QuizForm);

export default Container;
