import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class QuizForm extends React.Component {
	constructor(props) {
		super(props);

	}


	
	render() {
		let questions = null;
		return (
			<div>
				<form>
					{questions}
				</form>
			</div>
		);
	}
}

let mapStateToProps = {

};

QuizForm.propTypes = {
	children: PropTypes.element
};

let Container = connect(mapStateToProps)(QuizForm);

export default Container;
