import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Question from './question';
import RandomRecipe from './randomRecipe';
import {getRandomRecipe} from '../actions/recipe_actions';


class QuizForm extends React.Component {
	constructor(props) {
		super(props);

	}

	componentWillMount() {
		this.props.dispatch(getRandomRecipe(this.props.questions));
	}


	onSubmit(e) {
		e.preventDefault();
	}


	render() {
		return (
			<div id="quizDiv">
				{this.props.randomRecipes?<RandomRecipe />: <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />}
				<i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
				<div id="questionsDiv">
					<form onSubmit={this.onSubmit}>
						{this.props.randomRecipes?<Question className="question" text={this.props.questions[this.props.counter].title}
							valueA={this.props.questions[this.props.counter].valueA}
							valueB={this.props.questions[this.props.counter].valueB}
							titleA={this.props.randomRecipes[0].title}
							titleB={this.props.randomRecipes[1].title}
						/>:''}
					</form>
					<span id="feedback">{this.props.feedback}</span>
					<span id="score">Score: {this.props.score}</span>
				</div>
			</div>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		randomRecipes: state.foodReducer.recipe,
		nutritionA: state.foodReducer.nutritionA,
		nutritionB: state.foodReducer.nutritionB,
		questions: state.foodReducer.questions,
		counter: state.foodReducer.questionCounter,
		feedback: state.foodReducer.feedback,
		score: state.foodReducer.score
	};
};

QuizForm.propTypes = {
	children: PropTypes.element,
	randomRecipes: PropTypes.array,
	nutritionA: PropTypes.array,
	nutritionB: PropTypes.array,
	counter: PropTypes.number,
	score: PropTypes.number,
	feedback: PropTypes.string,
	questions: PropTypes.array,
	dispatch: PropTypes.func
};

let Container = connect(mapStateToProps)(QuizForm);

export default Container;
