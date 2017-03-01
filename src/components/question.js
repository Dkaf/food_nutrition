import React, {PropTypes} from 'react';
import {addScore, nextQuestion} from '../actions/quizActions';
import {connect} from 'react-redux';


class Question extends React.Component {
	constructor(props) {
		super(props);
		this.checkAnswer = this.checkAnswer.bind(this);
	}

	checkAnswer(e) {
		e.preventDefault();
		if( this.props.valueA > this.props.valueB && e.value == this.props.valueA) {
			this.dispatch(addScore());
			this.dispatch(nextQuestion());
		}
		else if ( this.props.valueB > this.props.valueA && e.value == this.props.valueB) {
			this.dispatch(addScore());
			this.dispatch(nextQuestion());
		}
	}

	render() {
		return (
			<div className="questionDiv">
				<span>{this.props.text}</span>
					<button className="questionRadio" value={this.props.valueA} onChange={this.checkAnswer}>{this.props.titleA}</button>
					<button className="questionRadio" value={this.props.valueB} onChange={this.checkAnswer} >{this.props.titleB}</button>
			</div>
		);
	}
}

Question.propTypes = {
	text: PropTypes.string.isRequired,
	valueA: PropTypes.string.isRequired,
	valueB: PropTypes.string.isRequired,
	titleA: PropTypes.string.isRequired,
	titleB: PropTypes.string.isRequired,
	onChange: PropTypes.func
};


let Container = connect()(Question);

export default Container;
