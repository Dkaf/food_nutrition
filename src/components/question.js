import React, {PropTypes} from 'react';
import * as actions from '../actions/quizActions';
import {connect} from 'react-redux';


class Question extends React.Component {
	constructor(props) {
		super(props);
		this.checkAnswer = this.checkAnswer.bind(this);
	}

	checkAnswer(e) {
		e.preventDefault();
		console.log('clicked');
		if( this.props.valueA > this.props.valueB && e.target.value == this.props.valueA) {
			this.props.dispatch(actions.addScore());
		}
		else if ( this.props.valueB > this.props.valueA && e.target.value == this.props.valueB) {
			this.props.dispatch(actions.addScore());
		} else {
			this.props.dispatch(actions.incorrect());
		}
		if (this.props.count === this.props.questions.length - 1) {
			this.props.dispatch(actions.quizReset());
		} else {
			this.props.dispatch(actions.nextQuestion());
		}
	}

	render() {
		return (
			<div className="questionDiv">
				<span className="questionText"> Which has more {this.props.text}?</span>
					<button className="questionButton" value={this.props.valueA} onClick={this.checkAnswer}>{this.props.titleA}</button>
					<button className="questionButton" value={this.props.valueB} onClick={this.checkAnswer} >{this.props.titleB}</button>
			</div>
		);
	}
}

Question.propTypes = {
	text: PropTypes.string.isRequired,
	valueA: PropTypes.number.isRequired,
	valueB: PropTypes.number.isRequired,
	titleA: PropTypes.string.isRequired,
	titleB: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	questions: PropTypes.array,
	count: PropTypes.number,
	dispatch: PropTypes.func
};

let mapStateToProps = (state) => {
	return {
		count: state.foodReducer.questionCounter,
		questions: state.foodReducer.questions
	};
};


let Container = connect(mapStateToProps)(Question);

export default Container;
