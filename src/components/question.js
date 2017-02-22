import React, {PropTypes} from 'react';


class Question extends React.Component {
	render() {
		return (
			<div>
				<span >{this.props.text}</span>
			</div>
		);
	}
}

Question.proptypes = {
	text: PropTypes.string
}
