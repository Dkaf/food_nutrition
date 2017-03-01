import * as types from '../constants/food_action_types';

export function addScore() {
	return {
		type: types.ADD_SCORE,
		score: 1
	};
}

export function nextQuestion() {
	return {
		type: types.NEXT_QUESTION,
		question: 1
	};
}

export function quizReset() {
	return {
		type: types.QUIZ_RESET,
		question: 0,
		score: 0
	};
}
