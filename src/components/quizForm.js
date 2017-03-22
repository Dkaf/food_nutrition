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

let mapStateToProps = (state) => {
	return {
		questions: state.foodReducer.questions
	};
};

QuizForm.propTypes = {
	children: PropTypes.element,
	questions: PropTypes.array,
	dispatch: PropTypes.func
};

let Container = connect(mapStateToProps)(QuizForm);

export default Container;
