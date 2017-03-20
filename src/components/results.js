import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {quizReset} from '../actions/quizActions';
import {getRandomRecipe} from '../actions/recipe_actions';

class Results extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.props.dispatch(quizReset(0,0));
		// this.props.dispatch(getRandomRecipe());
	}
	render() {
		return (
			<div id="resultsDiv">
				<span>Your quiz results:</span>
				<span className="finalScore"> {this.props.score} out of {this.props.questions.length} correct </span>
				<button id="retryButton" onClick={this.onClick}><Link to="quiz">Try again?</Link></button>
			</div>
		);
	}
}

Results.propTypes = {
	score: PropTypes.number,
	questions: PropTypes.array,
	dispatch: PropTypes.func
};

let mapStateToProps = (state) => {
	return {
		score: state.foodReducer.score,
		questions: state.foodReducer.questions
	};
};

let Container = connect(mapStateToProps)(Results);

export default Container;
