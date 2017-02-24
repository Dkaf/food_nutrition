import React, {PropTypes} from 'react';


class Question extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="questionDiv">
				<span>{this.props.text}</span>
				<radiogroup className="questionRadiogroup">
					<radio className="questionRadio" value={this.props.valueA} label={this.props.titleA}/>
					<radio className="questionRadio" value={this.props.valueB} label={this.props.titleB} />
				</radiogroup>
			</div>
		);
	}
}

Question.propTypes = {
	text: PropTypes.string.isRequired,
	valueA: PropTypes.string.isRequired,
	valueB: PropTypes.string.isRequired,
	titleA: PropTypes.string.isRequired,
	titleB: PropTypes.string.isRequired
};

export default Question;
