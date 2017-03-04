import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Question from './question';
import {getRandomRecipe} from '../actions/recipe_actions';
import {quizSetup} from '../actions/quizActions';


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
		if(this.props.randomRecipes != null) {
			return (
				<div>
					<form onSubmit={this.onSubmit}>
						<Question text="Which has more calories?" valueA={this.props.questions[this.props.counter].valueA} valueB={this.props.questions[this.props.counter].valueB} titleA={this.props.randomRecipes[0].title} titleB={this.props.randomRecipes[1].title} />
					</form>
				</div>
			);
		}
		else {
			return <div />;
		}
	}
}

let mapStateToProps = (state) => {
	return {
		randomRecipes: state.foodReducer.recipe,
		nutritionA: state.foodReducer.nutritionA,
		nutritionB: state.foodReducer.nutritionB,
		questions: state.foodReducer.questions,
		counter: state.foodReducer.questionCounter
	};
};

QuizForm.propTypes = {
	children: PropTypes.element,
	randomRecipes: PropTypes.array,
	nutritionA: PropTypes.array,
	nutritionB: PropTypes.array,
	counter: PropTypes.number,
	questions: PropTypes.array,
	dispatch: PropTypes.func
};

let Container = connect(mapStateToProps)(QuizForm);

export default Container;
