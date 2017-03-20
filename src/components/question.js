import React, {PropTypes} from 'react';
import * as actions from '../actions/quizActions';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import RandomRecipe from './randomRecipe';
import LoadingIcon from './loadingIcon';

class Question extends React.Component {
	constructor(props) {
		super(props);
		this.checkAnswer = this.checkAnswer.bind(this);
	}

	componentWillMount() {

	}

	checkAnswer(e) {
		e.preventDefault();
		if( this.props.questions[this.props.count].valueA > this.props.questions[this.props.count].valueB && e.target.value == this.props.questions[this.props.count].valueA) {
			this.props.dispatch(actions.addScore());
		}
		else if ( this.props.questions[this.props.count].valueB > this.props.questions[this.props.count].valueA && e.target.value == this.props.questions[this.props.count].valueB) {
			this.props.dispatch(actions.addScore());
		} else {
			this.props.dispatch(actions.incorrect());
		}
		if (this.props.count === this.props.questions.length - 1) {
			browserHistory.push('/quiz/results');
		} else {
			this.props.dispatch(actions.nextQuestion());
		}
	}

	render() {
		return (
			<div className="questionDiv">
				{this.props.randomRecipes?<div>
				<RandomRecipe/>
				<span className="questionText"> Which has more {this.props.questions[this.props.count].title}?</span>
					<button
						className="questionButton"
						value={this.props.questions[this.props.count].valueA}
						onClick={this.checkAnswer}>{this.props.randomRecipes[0].title}
					</button>
					<button
						className="questionButton"
						value={this.props.questions[this.props.count].valueB}
						onClick={this.checkAnswer}>{this.props.randomRecipes[1].title}
					</button>
				</div>:<LoadingIcon/>}
				<span id="feedback">{this.props.feedback}</span>
				<span id="score">Score: {this.props.score}</span>
			</div>
		);
	}
}

Question.propTypes = {
	onChange: PropTypes.func,
	questions: PropTypes.array,
	count: PropTypes.number,
	randomRecipes: PropTypes.array,
	dispatch: PropTypes.func,
	feedback: PropTypes.string,
	score: PropTypes.number
};

let mapStateToProps = (state) => {
	return {
		count: state.foodReducer.questionCounter,
		questions: state.foodReducer.questions,
		randomRecipes: state.foodReducer.recipe,
		score: state.foodReducer.score,
		feedback: state.foodReducer.feedback
	};
};


let Container = connect(mapStateToProps)(Question);

export default Container;
